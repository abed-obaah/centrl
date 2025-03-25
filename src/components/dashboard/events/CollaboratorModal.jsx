import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function CollaboratorModal({
  isOpen,
  onClose,
  collaborators = [],
  onAddCollaborator,
  onRemoveCollaborator,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleAddCollaborator = () => {
    if (name && email) {
      onAddCollaborator({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-200 font-600">Add Collaborators</h3>
          <button onClick={onClose} className="text-muted50 hover:text-black">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-100 font-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 w-full rounded-md border px-3 py-2 outline-none"
            placeholder="Enter collaborator name"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-100 font-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 w-full rounded-md border px-3 py-2 outline-none"
            placeholder="Enter collaborator email"
          />
        </div>

        <button
          onClick={handleAddCollaborator}
          className="mb-4 flex items-center rounded-md bg-[#FF6F02] px-4 py-2 text-white"
        >
          <Plus className="mr-1 h-4 w-4" /> Add Collaborator
        </button>

        {collaborators.length > 0 && (
          <div>
            <h4 className="mb-2 text-100 font-500">Current Collaborators</h4>
            <ul className="border-gray-200 max-h-40 overflow-auto rounded-md border">
              {collaborators.map((collab, index) => (
                <li
                  key={index}
                  className="border-gray-200 flex items-center justify-between border-b px-3 py-2 last:border-0"
                >
                  <div>
                    <p className="font-500">{collab.name}</p>
                    <p className="text-50 text-muted50">{collab.email}</p>
                  </div>
                  <button
                    onClick={() => onRemoveCollaborator(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md bg-[#FF6F02] px-4 py-2 text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
