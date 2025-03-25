import { Link } from "react-router-dom";

const ProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-10 z-50 mt-0 w-56 rounded-xl bg-white p-2 shadow-lg">
      <div className="flex space-x-4 border-b border-b-[#000]/15 pb-2">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="size-9 rounded-full"
        />
        <div>
          <p className="text-[15px] font-500">{user.name} </p>
          <p className="text-[10px] font-500 text-[#646060]">{user.email}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 py-2">
        <Link
          to={"/user-profile"}
          className="text-50 font-600 text-black"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
        >
          View Profile
        </Link>

        <Link
          to={"/"}
          className="text-50 font-600 text-black"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
        >
          Payments
        </Link>

        <Link
          to={"/settings"}
          className="text-50 font-600 text-black"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
        >
          Settings
        </Link>

        <p className="cursor-pointer text-50 font-600 text-black">Logout</p>
      </div>
    </div>
  );
};

export default ProfileModal;
