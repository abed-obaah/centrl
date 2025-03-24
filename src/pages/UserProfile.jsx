import { useRef, useState, useEffect } from "react";

import userBg from "../assets/userBg.png";
import Avatar from "../assets/avatars.png";
import Star from "../assets/Star.png";
import Share from "../assets/share-ico.png";
import X from "../assets/X.png";
import Facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { PencilIcon } from "lucide-react";
import TechEvents from "../components/dashboard/eventsCalender/TechEvents";
import Calendar from "../components/dashboard/eventsCalender/Calender";
import UserBio from "../components/user/UserBio";
import { Button } from "@headlessui/react";
import EditProfileModal from "../components/user/EditProfileModal";

import Num from "../assets/Future100.png";
import Rave from "../assets/rave.png";
import Even from "../assets/123.png";
import Chilbilz from "../assets/873.png";
import Techbro from "../assets/tech.png";
import David from "../assets/david.png";
import Followers from "../components/user/Followers";
import { useSelector } from "react-redux";
import { getUserProfile,updateProfileImages } from "../api/userApi";


const profile = {
  name: "Andy Mineo",
  stats: "26K likes • 165K followers",
  bio: "Combining an unparalleled stage presence with the smoothest voice in the industry, Bruno Mars could rightly be called the 21st century's answer to Michael Jackson.",
  rating: "100% recommended (20 reviews)",
  imageUrl: Avatar,
  coverImageUrl: userBg,
  social: {
    facebook: Facebook,
    instagram: instagram,
    x: X,
    linkedin: linkedin,
  },
};

const followers = [
  {
    id: 1,
    name: "Rave",
    image: Rave,
    count: "95k",
    isSubscribed: true,
  },

  {
    id: 2,
    name: "David",
    image: David,
    count: "95k",
    isSubscribed: true,
  },

  {
    id: 3,
    name: "Even In The Day",
    image: Even,
    count: "95k",
    isSubscribed: true,
  },

  {
    id: 4,
    name: "Future100",
    image: Num,
    count: "95k",
    isSubscribed: true,
  },

  {
    id: 5,
    name: "Tech Bro",
    image: Techbro,
    count: "95k",
    isSubscribed: true,
  },

  {
    id: 6,
    name: "ChilBiz",
    image: Chilbilz,
    count: "95k",
    isSubscribed: true,
  },
];

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");
  const [profileImage, setProfileImage] = useState(profile.imageUrl);
  const [bannerImage, setBannerImage] = useState(profile.coverImageUrl);
  const [selectedDate, setSelectedDate] = useState(new Date());




  const { token } = useSelector((state) => state.auth); // Get token from Redux
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);


  useEffect(() => {
    if (!token) return;
    
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        console.log("Profile Data:", data);
        setUserProfile(data.user);
        setProfileDetails(data.profile); // Assuming API returns user data
      } catch (err) {
        setError("Failed to fetch user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);


  const profileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // const handleProfileImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setProfileImage(imageUrl);
  //   }
  // };

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    console.log("📸 Selected Profile Image: ", file);
  
    if (file) {
      // Instantly show the selected image on the frontend
      setProfileImage(URL.createObjectURL(file));
  
      try {
        // Call the API to upload the image
        const response = await updateProfileImages(token, null, file);
        console.log("✅ Profile image updated:", response);
  
        if (response?.data?.profile_image_url) {
          // Update the profileDetails with new image URL
          setProfileDetails((prev) => ({
            ...prev,
            profile_image: response.data.profile_image_url,
          }));
  
          // Optionally, clear the local state once persisted
          setProfileImage(null);
        }
      } catch (error) {
        console.error("❌ Failed to update profile image:", error);
      }
    }
  };
  
  

  // const handleBannerImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setBannerImage(imageUrl);
  //   }
  // };

  const triggerProfileImageUpload = () => {
    profileInputRef.current.click();
  };

// Trigger file input when image is clicked
const triggerBannerImageUpload = () => {
  bannerInputRef.current.click();
};

// Handle banner image selection
const handleBannerImageChange = async (e) => {
  const file = e.target.files[0];
  console.log("📸 Selected File: ", file);
  
  if (file) {
    setBannerImage(URL.createObjectURL(file));
    try {
      const response = await updateProfileImages(token, file, null);
      console.log("✅ Banner image updated:", response);
    } catch (error) {
      console.error("❌ Failed to update banner image:", error);
    }
  }
};



  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSaveProfile = (profileData) => {
    if (profileData.profileImage) {
      setProfileImage(URL.createObjectURL(profileData.profileImage));
    }
    // send  data to the backend
    console.log("Profile data saved:", profileData);
    setIsModalOpen(false);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Check out ${profile.name} events!`,
      text: `${profile.name} - ${profile.stats}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Shared successfully");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      <div className="mb-20 mt-24">
        <div className="container">
          <div className="relative mx-auto max-w-[1100px]">
            <div className="group relative">
                        <img
              src={profileDetails?.banner_image 
                    ? `https://api.centrl.ng/uploads/banners/${profileDetails.banner_image}` 
                    : bannerImage}
              alt="Profile cover"
              className="h-32 w-full cursor-pointer rounded-xl object-cover lg:h-[291px]"
              onClick={triggerBannerImageUpload}
            />


            <input
              type="file"
              ref={bannerInputRef}
              onChange={handleBannerImageChange}
              accept="image/*"
              className="hidden"
            />
            </div>

            <button
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
              onClick={triggerBannerImageUpload}
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
                        <img
                          src={
                            profileDetails?.profile_image
                              ? `https://api.centrl.ng/uploads/profiles/${profileDetails.profile_image}`
                              : profileImage
                          }
                          alt="Profile"
                          className="h-24 w-24 cursor-pointer rounded-full ring-4 ring-background sm:h-32 sm:w-32"
                          onClick={triggerProfileImageUpload}
                        />

                        <input
                          type="file"
                          ref={profileInputRef}
                          onChange={handleProfileImageChange}
                          accept="image/*"
                          className="hidden"
                        />

                        <button
                          className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md"
                          onClick={triggerProfileImageUpload}
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
                    className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-black"
                  >
                    <img src={Star} alt="Rate" className="mr-2 h-4 w-4" />
                    Rate
                  </button>
                  <Button
                    className="rounded-2xl bg-white p-2"
                    onClick={handleShare}
                  >
                    <img src={Share} className="h-6 w-6 object-contain" />
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="font-700 text-black md:text-400">
                {userProfile ? userProfile.name : "Loading..."}
                </h2>
                {/* <p className="text-sm text-black">{profile.stats}</p> */}
                <div className="flex items-center gap-2">
                  <p className="text-sm text-black">{profileDetails?.likes || 0} Likes</p>
                  <p className="text-sm text-black">•</p>
                  <p className="text-sm text-black">{profileDetails?.followers || 0} Followers</p>
                </div>

              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  {Object.entries(profile.social).map(([key, icon]) => (
                    <img key={key} src={icon} alt={key} className="size-5" />
                  ))}
                </div>

                <div className="mt-4 flex space-x-6 sm:mt-0">
                  <button
                    className={`font-600 ${
                      activeTab === "calendar"
                        ? "text-black"
                        : "text-foreground"
                    }`}
                    onClick={() => setActiveTab("calendar")}
                  >
                    Calendar
                  </button>
                  <button
                    className={`font-600 ${
                      activeTab === "following"
                        ? "text-black"
                        : "text-foreground"
                    }`}
                    onClick={() => setActiveTab("following")}
                  >
                    Following
                  </button>
                </div>
              </div>

              <hr className="mt-16 text-[#000]/15" />
            </div>

            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
              <div className="md:sticky md:top-28 md:self-start">
                {/* <UserBio profile={profile} /> */}
                <UserBio profile={profileDetails} />


                <Calendar onSelectDate={handleDateSelect} />
              </div>
              {activeTab === "calendar" && (
                <TechEvents selectedDate={selectedDate} />
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
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
