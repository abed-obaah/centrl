import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const Hosts = ({ eventData }) => {
  const [collaborators, setCollaborators] = useState([]);
  const [host, setHost] = useState("");

  useEffect(() => {
    if (eventData.collaborators) {
      if (typeof eventData.collaborators === "string") {
        try {
          const collaboratorsString = eventData.collaborators.replace(
            /^"|"$/g,
            "",
          );
          const collaboratorsArray = collaboratorsString
            .split(",")
            .map((name) => name.trim());
          setCollaborators(collaboratorsArray);
        } catch (error) {
          console.error("Error parsing collaborators:", error);
          setCollaborators([]);
        }
      } else if (Array.isArray(eventData.collaborators)) {
        setCollaborators(eventData.collaborators);
      }
    }

    // Set the host from eventData.name
    if (eventData.name) {
      setHost(eventData.name);
    }
  }, [eventData]);

  return (
    <div className="mt-12 max-w-[761px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-300 font-600">Host & Collaborators</h2>

        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-500">
          <Plus className="size-5" />
          <span>Add</span>
        </div>
      </div>

      {/* Display Host */}
      {host && (
        <div className="mb-2">
          <div className="flex items-center justify-between rounded-sm bg-white p-2">
            <div className="flex items-center gap-2">
              <div className="mr-2 flex size-7 items-center justify-center rounded-full bg-muted text-sm">
                {host.charAt(0) || "U"}
              </div>
              <div>
                <p className="font-600">{host}</p>
              </div>
            </div>

            <span className="mr-2 rounded bg-green-300 px-2 py-0.5 text-xs">
              Host
            </span>
          </div>
        </div>
      )}

      {collaborators.length > 1 ? (
        <div className="space-y-2">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-sm bg-white p-2"
            >
              <div className="flex items-center gap-2">
                <div className="mr-2 flex size-7 items-center justify-center rounded-full bg-muted text-sm">
                  {collaborator.charAt(0) || "U"}
                </div>
                <div>
                  <p className="font-600">{collaborator}</p>
                </div>
              </div>

              <span className="mr-2 rounded bg-green-300 px-2 py-0.5 text-xs">
                Collaborator
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <p className="font-500 text-foreground/50">
            You have no collaborators
          </p>
        </div>
      )}
    </div>
  );
};

export default Hosts;
