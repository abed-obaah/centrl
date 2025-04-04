import { Link } from "react-router-dom";
import { logoutUser } from "../api/logoutApi"; // API call function
import { logout } from "../redux/authSlice"; // Redux logout action
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import AvatarFallback from "./AvatarFallback";
import { toast } from "sonner";

const ProfileModal = ({ isOpen, onClose, user }) => {
  const dispatch = useDispatch();
  const { token, googleId } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Hook for navigation

  if (!isOpen) return null;

  const handleLogout = async () => {
    try {
      if (!token) {
        console.error("No token found");
        dispatch(logout()); // Still try to clear state
        navigate("/sign-up", { replace: true });
        return;
      }

      const loadingToast = toast.loading("Logging out...");

      // Pass isGoogleAuth flag based on whether user has a googleId
      const isGoogleAuth = !!googleId;
      const response = await logoutUser(token, isGoogleAuth);

      toast.dismiss(loadingToast);

      if (response.status === "success") {
        dispatch(logout()); // Clear Redux store

        // Clear any additional local storage from google
        localStorage.removeItem("google_auth_state");
        sessionStorage.clear();

        toast.success("Logout successful");
        onClose(); // Close modal before navigating

        // Navigate to sign-up and replace history to prevent back navigation
        navigate("/sign-up", { replace: true });
      }
    } catch (error) {
      console.error("Logout failed:", error);

      toast.error("Something went wrong. Please try again.");

      // Force logout locally even if API call fails
      dispatch(logout());
      navigate("/sign-up", { replace: true });
    }
  };

  return (
    <div className="absolute right-10 z-50 mt-0 w-56 rounded-xl bg-white p-2 shadow-lg">
      <div className="flex space-x-2 border-b border-b-[#000]/15 pb-2">
        {user.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt={user.name}
            className="size-9 rounded-full object-cover"
          />
        ) : (
          <AvatarFallback
            name={user.name || "User"}
            size="md"
            className="size-9"
          />
        )}

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
