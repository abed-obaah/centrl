import { useState } from "react";
import { X } from "lucide-react";
import { updateUserProfile } from "../../api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";

const EditProfileModal = ({
  isOpen,
  onClose,
  profileDetails,
  userProfile,
  token,
  onSave,
}) => {
  const [firstName, setFirstName] = useState(
    userProfile?.name?.split(" ")[0] || "",
  );
  const [lastName, setLastName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user_id, email, googleId, profileImage } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  const [additionalName, setAdditionalName] = useState(
    profileDetails?.additional_name || "",
  );
  const [tagline, setTagline] = useState(profileDetails?.tagline || "");
  const [bio, setBio] = useState(profileDetails?.bio || "");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const fullName = userProfile.name;

    const profileData = {
      user_id,
      name: fullName,
      additional_name: additionalName,
      tagline,
      bio,
    };

    try {
      // Show loading toast
      const toastId = toast.loading("Updating profile...");

      // Call the API to update the profile
      const response = await updateUserProfile(token, profileData);

      toast.dismiss(toastId);

      // Update Redux store with new name
      dispatch(
        setUser({
          token,
          user_id,
          name: fullName,
          email,
          googleId,
          profileImage,
        }),
      );

      // Call the onSave callback with the updated data
      if (onSave) {
        onSave(response.data);
      }

      // Show success toast
      toast.success("Profile updated successfully", { id: toastId });

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="z-[800] mx-4 max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-lg bg-white">
        <div className="flex items-center justify-between border-b border-[#000]/15 p-6">
          <span className="text-100 font-500">Edit Profile</span>
          <button
            onClick={onClose}
            className="hover:text-gray-700 text-black"
            disabled={isSubmitting}
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="mb-2 block font-500 text-foreground">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border p-2"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-500 text-foreground">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border p-2"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-500 text-foreground">
              Additional Name
            </label>
            <input
              type="text"
              value={additionalName}
              onChange={(e) => setAdditionalName(e.target.value)}
              className="w-full rounded-md border p-2"
              disabled={isSubmitting}
              placeholder="Nickname or other name (optional)"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-500 text-foreground">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder="Tell us about yourself"
              className="min-h-[100px] w-full rounded-md border p-2"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-500 text-foreground">
              Tagline
            </label>
            <textarea
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
              placeholder="A short description that appears under your name"
              className="w-full rounded-md border p-2"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-sm border-gray-300 rounded-md border px-6 py-2"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm rounded-md bg-subColorBtn px-6 py-2 text-white disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
