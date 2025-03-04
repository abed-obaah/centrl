import { PencilIcon } from 'lucide-react';
import DiamondIcon from '../../assets/diamond.png';
const UserBio = ({ profile }) => {
  return (
    <div className="bg-white px-4 py-6 rounded-xl mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-200 font-600">Intro</h2>
        <button>
          <PencilIcon className="h-4 w-4" />
        </button>
      </div>
      <p className="text-sm text-gray-700 mb-4">{profile.intro}</p>
      <div className="flex gap-2">
        <img src={DiamondIcon} alt="diamond" />
        <p>{profile.rating}</p>
      </div>
    </div>
  );
};

export default UserBio;
