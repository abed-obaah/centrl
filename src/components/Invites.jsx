import optionsImage from "../assets/optionsImage.png";
import edit from "../assets/Subtract.svg";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const itemsData = [
  {
    id: 1,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },
];

export default function MoreOptions({ search = "" }) {
  // Store toggle state for each item
  const [toggleStates, setToggleStates] = useState(
    itemsData.reduce((acc, item) => {
      if (item.type === "toggle") acc[item.id] = false; // Default state is false
      return acc;
    }, {}),
  );

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific item
    }));
  };

  const filteredItems = itemsData.filter((item) =>
    (item.label || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ul role="list" className="max-w-[761px] space-y-1 pb-12">
      <label className="mb-2 block text-500 font-700">Invites</label>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <li
            key={item.id}
            className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3"
          >
            <div className="flex items-center gap-4">
              <div className="flex min-w-0 flex-[1.5] items-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="mr-2 h-10 w-10 flex-shrink-0"
                />
                <span className="truncate text-100 font-400">{item.label}</span>
              </div>
              <div className="min-w-0 flex-[1] text-left">
                <span className="truncate text-100 font-400">{item.email}</span>
              </div>
              <div className="min-w-0 flex-[1] text-left">
                <span className="truncate text-100 font-400">{item.age}</span>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-50 font-500 text-muted50">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p className="text-center text-muted50">No guests found.</p>
      )}
    </ul>
  );
}
