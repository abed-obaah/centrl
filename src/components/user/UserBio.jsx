import DiamondIcon from '../../assets/diamond.png';
const UserBio = ({ profile }) => {
  return (
    <div className="bg-white px-4 py-6 rounded-xl mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-200 font-600">Bio</h2>
      </div>
      <p className="text-50 leading-[1.6] mb-4">{profile.bio}</p>
      <div className="flex gap-2">
        <img src={DiamondIcon} alt="diamond" />
        <p className="text-50">{profile.rating}</p>
      </div>
    </div>
  );
};

export default UserBio;
