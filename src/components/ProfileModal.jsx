import { Link } from "react-router-dom";
import { logoutUser } from "../api/logoutApi"; // API call function
import { logout } from "../redux/authSlice"; // Redux logout action
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ isOpen, onClose, user }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate(); // Hook for navigation

  if (!isOpen) return null;

  const handleLogout = async () => {
    try {
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await logoutUser(token);

      if (response.status === "success") {
        dispatch(logout()); // Clear Redux store
        console.log("Logout successful");
        onClose(); // Close modal before navigating

        // Navigate to sign-up and replace history to prevent back navigation
        navigate("/sign-up", { replace: true });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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

        {/* Logout Option */}
        <p
          className="cursor-pointer text-50 font-600 text-black"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default ProfileModal;
