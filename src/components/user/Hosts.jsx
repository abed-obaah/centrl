import { Link } from 'react-router-dom';
import optionsImage from '../../assets/admin-avatar.png';
import { Plus } from 'lucide-react';

const itemsData = [
  {
    id: 1,
    label: 'Handy Mineo',
    position: 'Host',
    image: optionsImage,
  },

  {
    id: 2,
    label: 'Handy Mineo',
    position: 'Collaborator',
    image: optionsImage,
  },

  {
    id: 3,
    label: 'Handy Mineo',
    position: 'Collaborator',
    image: optionsImage,
  },
];

const Hosts = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-700 text-500">Host & Collaborators</h2>

        <div className="bg-white flex items-center gap-2 px-4 font-500 py-2 rounded-xl">
          <Plus className="size-5" />
          <span>Add</span>
        </div>
      </div>

      <div className="space-y-[2px]">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-sm items-center justify-between  p-2"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.label} className="size-7" />
              <div>
                <p className="font-600">{item.label}</p>
              </div>
            </div>

            <span className="py-2 px-4 bg-[#22FF0054] text-50 rounded-xl">
              {item.position}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hosts;
