import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { PencilIcon } from "lucide-react";
import userBg from "../assets/userBg.png";
import Star from "../assets/Star.png";
import Share from "../assets/share-ico.png";
import X from "../assets/X.png";
import Facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { useUserProfile } from "../hooks/useUserProfile";
import TechEvents from "../components/dashboard/eventsCalender/TechEvents";
import UserBio from "../components/user/UserBio";
import SkeletonLoader from "../components/SkeletonLoader";
import Calendar from "../components/dashboard/eventsCalender/Calender";
import EditProfileModal from "../components/user/EditProfileModal";
import AvatarFallback from "../components/AvatarFallback";
// import Followers from "../components/user/Followers";

// Default social media icons
const socialIcons = {
  facebook: Facebook,
  instagram: instagram,
  x: X,
  linkedin: linkedin,
};

const UserProfile = () => {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Optimistic UI state
  const [optimisticProfileImage, setOptimisticProfileImage] = useState(null);
  const [optimisticBannerImage, setOptimisticBannerImage] = useState(null);

  // File input refs
  const profileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // Get auth token from Redux
  const { token } = useSelector((state) => state.auth);

  // Use the custom hook to fetch and manage user profile data
  const {
    userProfile,
    profileDetails,
    isLoading,
    error,
    updateProfileImage,
    isUpdatingProfileImage,
    updateBannerImage,
    isUpdatingBannerImage,
  } = useUserProfile(token);

  // Show error toast if there's an error
  useEffect(() => {
    if (error) {
      toast.error("Failed to load profile data");
    }
  }, [error]);

  // Get profile image URL (with optimistic update)
  const getProfileImageUrl = () => {
    if (optimisticProfileImage) {
      return optimisticProfileImage;
    }

    if (profileDetails?.profile_image) {
      return `https://api.centrl.ng/uploads/profiles/${profileDetails.profile_image}`;
    }

    return null;
  };

  // Get banner image URL (with optimistic update)
  const getBannerImageUrl = () => {
    if (optimisticBannerImage) {
      return optimisticBannerImage;
    }

    if (profileDetails?.banner_image) {
      return `https://api.centrl.ng/uploads/banners/${profileDetails.banner_image}`;
    }

    return userBg;
  };

  // Handle profile image change with optimistic update
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create local URL for optimistic update
    const localImageUrl = URL.createObjectURL(file);
    setOptimisticProfileImage(localImageUrl);

    // Show loading toast
    const toastId = toast.loading("Updating profile image...");

    try {
      // Call mutation to update the image
      updateProfileImage(file);

      // Success toast
      toast.success("Profile image updated successfully", { id: toastId });
    } catch (error) {
      // Error toast
      toast.error("Failed to update profile image", { id: toastId });
      console.error("Failed to update profile image:", error);

      // Revert optimistic update
      setOptimisticProfileImage(null);
    }
  };

  // Handle banner image change with optimistic update
  const handleBannerImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create local URL for optimistic update
    const localImageUrl = URL.createObjectURL(file);
    setOptimisticBannerImage(localImageUrl);

    // Show loading toast
    const toastId = toast.loading("Updating banner image...");

    try {
      // Call mutation to update the image
      updateBannerImage(file);

      // Success toast
      toast.success("Banner image updated successfully", { id: toastId });
    } catch (error) {
      // Error toast
      toast.error("Failed to update banner image", { id: toastId });
      console.error("Failed to update banner image:", error);

      // Revert optimistic update
      setOptimisticBannerImage(null);
    }
  };

  // Trigger file input clicks
  const triggerProfileImageUpload = () => profileInputRef.current.click();
  const triggerBannerImageUpload = () => bannerInputRef.current.click();

  // Handle date selection for calendar
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Handle profile data save
  const handleSaveProfile = async (profileData) => {
    // Show loading toast
    const toastId = toast.loading("Saving profile changes...");

    try {
      console.log("Profile data saved:", profileData);

      // Success toast
      toast.success("Profile updated successfully", { id: toastId });
      setIsModalOpen(false);
    } catch (error) {
      // Error toast
      toast.error("Failed to update profile", { id: toastId });
      console.error("Error saving profile:", error);
    }
  };

  // Handle share functionality
  const handleShare = async () => {
    const shareData = {
      title: `Check out ${userProfile?.name || "this profile"} events!`,
      text: `${userProfile?.name || "Profile"} - ${profileDetails?.followers || 0} followers`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      toast.error("Error sharing profile");
      console.error("Error sharing:", error);
    }
  };

  // Show skeleton loader while loading
  if (isLoading) {
    return <SkeletonLoader type="profile" />;
  }

  return (
    <>
      <div className="mb-20 mt-24">
        <div className="container">
          <div className="relative mx-auto max-w-[1100px]">
            {/* Banner Image */}
            <div className="group relative">
              <div className="relative h-32 w-full lg:h-[291px]">
                <img
                  src={getBannerImageUrl() || "/placeholder.svg"}
                  alt="Profile cover"
                  className="h-full w-full cursor-pointer rounded-xl object-cover"
                  onClick={triggerBannerImageUpload}
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>

              <input
                type="file"
                ref={bannerInputRef}
                onChange={handleBannerImageChange}
                accept="image/*"
                className="hidden"
              />
            </div>

            <button
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-105"
              onClick={triggerBannerImageUpload}
              aria-label="Change banner image"
              disabled={isUpdatingBannerImage}
            >
              <PencilIcon className="text-gray-600 h-4 w-4" />
            </button>
          </div>

          {/* Profile header */}
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8">
              <div className="-mt-12 flex flex-col px-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between sm:px-0">
                <div className="flex items-end space-x-5">
                  <div className="group relative">
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32">
                      {getProfileImageUrl() ? (
                        <img
                          src={getProfileImageUrl() || "/placeholder.svg"}
                          alt="Profile"
                          className="h-full w-full cursor-pointer rounded-full object-cover ring-4 ring-white"
                          style={{ aspectRatio: "1 / 1" }}
                          onClick={triggerProfileImageUpload}
                        />
                      ) : (
                        <div
                          className="h-full w-full cursor-pointer rounded-full ring-4 ring-white"
                          onClick={triggerProfileImageUpload}
                        >
                          <AvatarFallback
                            name={userProfile?.name || "User"}
                            size="full"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>

                    <input
                      type="file"
                      ref={profileInputRef}
                      onChange={handleProfileImageChange}
                      accept="image/*"
                      className="hidden"
                    />

                    <button
                      className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-105"
                      onClick={triggerProfileImageUpload}
                      aria-label="Change profile image"
                      disabled={isUpdatingProfileImage}
                    >
                      <PencilIcon className="text-gray-600 h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2 sm:mt-0">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm font-medium inline-flex items-center rounded-lg bg-black px-4 py-2 text-white"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    className="text-sm font-medium inline-flex items-center rounded-lg bg-white px-4 py-2 text-black transition-colors"
                  >
                    <img
                      src={Star || "/placeholder.svg"}
                      alt="Rate"
                      className="mr-2 h-4 w-4"
                    />
                    Rate
                  </button>
                  <button
                    className="rounded-2xl bg-white p-2 transition-colors"
                    onClick={handleShare}
                    aria-label="Share profile"
                  >
                    <img
                      src={Share || "/placeholder.svg"}
                      className="h-6 w-6 object-contain"
                      alt="Share"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-bold text-black">
                  {userProfile?.name || "User"}
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-black">
<<<<<<< HEAD
                    {profileDetails?.likes || 0} Likes
=======
                    {profileDetails?.likes || 0} Events
>>>>>>> f9919fc (texts corrections)
                  </p>
                  <p className="text-sm text-black">•</p>
                  <p className="text-sm text-black">
                    {profileDetails?.followers || 0} Followers
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  {Object.entries(socialIcons).map(([key, icon]) => (
                    <img
                      key={key}
                      src={icon || "/placeholder.svg"}
                      alt={key}
                      className="size-5 cursor-pointer transition-transform hover:scale-110"
                    />
                  ))}
                </div>

                <div className="mt-4 flex space-x-6 sm:mt-0">
                  <button
                    className={`font-semibold transition-colors ${
                      activeTab === "calendar"
                        ? "text-black"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("calendar")}
                  >
                    Calendar
                  </button>
                  <button
                    className={`font-semibold transition-colors ${
                      activeTab === "following"
                        ? "text-black"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("following")}
                  >
                    Following
                  </button>
                </div>
              </div>

              <hr className="border-gray-200 mt-16" />
            </div>

            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
              <div className="md:sticky md:top-28 md:self-start">
                <UserBio profile={profileDetails} />
                <Calendar onSelectDate={handleDateSelect} />
              </div>

              {activeTab === "calendar" ? (
                <TechEvents selectedDate={selectedDate} />
              ) : (
                // <Followers />
                <p>No followers yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isModalOpen && (
          <EditProfileModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            profileDetails={profileDetails}
            userProfile={userProfile}
            onSave={handleSaveProfile}
            token={token}
          />
        )}
      </div>
    </>
  );
};

export default UserProfile;
