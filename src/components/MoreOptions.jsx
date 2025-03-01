import optionsImage from "../assets/optionsImage.png";
import edit from "../assets/Subtract.svg";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const itemsData = [
  { id: 1, label: "Tickets", value: "Free", editable: true, image: optionsImage },
  { id: 3, label: "Require Approval", type: "toggle", image: optionsImage },
  { id: 4, label: "Capacity", value: "Unlimited", editable: true, image: optionsImage },
  { id: 5, label: "Add Collaborator", value: "Add", image: optionsImage },
  { id: 6, label: "Language", value: "Add", image: optionsImage }
];

export default function MoreOptions() {
  // Store toggle state for each item
  const [toggleStates, setToggleStates] = useState(
    itemsData.reduce((acc, item) => {
      if (item.type === "toggle") acc[item.id] = false; // Default state is false
      return acc;
    }, {})
  );

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id] // Toggle the specific item
    }));
  };

  return (
    <ul role="list" className="space-y-1 w-[500px] mt-5">
      <label className="block text-100 font-500 mb-2">More options</label>
      {itemsData.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3">
          <div className="flex items-center space-x-3 justify-between">
            {/* Left side with image and label */}
            <div className="flex items-center">
              <img src={item.image} alt={item.label} className="w-10 h-10 mr-2" />
              <span className="text-100 font-400">{item.label}</span>
            </div>

            {/* Right side with toggle or value/edit button */}
            <div className="items-center">
              {item.type === "toggle" ? (
                <Switch
                  checked={toggleStates[item.id] || false}
                  onChange={() => handleToggle(item.id)}
                  className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2  border-muted border-transparent transition-colors duration-200 ease-in-out 
                  ${toggleStates[item.id] ? "bg-primary" : "bg-muted"}`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`inline-block size-4 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out 
                    ${toggleStates[item.id] ? "translate-x-5" : "translate-x-0"}`}
                  />
                </Switch>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="text-muted50 text-50 font-500">{item.value}</span>
                  {item.editable && (
                    <button className="text-blue-500">
                      <img src={edit} alt="Edit" className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
