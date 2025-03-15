import optionsImage from "../../assets/admin-avatar.png";
import { Plus } from "lucide-react";

const itemsData = [
  {
    id: 1,
    label: "Handy Mineo",
    position: "Host",
    image: optionsImage,
  },

  {
    id: 2,
    label: "Handy Mineo",
    position: "Collaborator",
    image: optionsImage,
  },

  {
    id: 3,
    label: "Handy Mineo",
    position: "Collaborator",
    image: optionsImage,
  },
];

const Hosts = () => {
  return (
    <div className="mt-12 max-w-[761px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-500 font-700">Host & Collaborators</h2>

        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-500">
          <Plus className="size-5" />
          <span>Add</span>
        </div>
      </div>

      <div className="space-y-[2px]">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-sm bg-white p-2"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.label} className="size-7" />
              <div>
                <p className="font-600">{item.label}</p>
              </div>
            </div>

            <span className="rounded-xl bg-[#22FF0054] px-4 py-2 text-50">
              {item.position}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hosts;
