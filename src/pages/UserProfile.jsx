import { useRef, useState } from 'react';

import userBg from '../assets/userBg.png';
import Avatar from '../assets/avatars.png';
import Star from '../assets/Star.png';
import Share from '../assets/share-ico.png';
import X from '../assets/X.png';
import Facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import { PencilIcon } from 'lucide-react';
import TechEvents from '../components/dashboard/eventsCalender/TechEvents';
import Calendar from '../components/dashboard/eventsCalender/Calender';
import UserBio from '../components/user/UserBio';
import { Button } from '@headlessui/react';
import EditProfileModal from '../components/user/EditProfileModal';

import Num from '../assets/Future100.png';
import Rave from '../assets/rave.png';
import Even from '../assets/123.png';
import Chilbilz from '../assets/873.png';
import Techbro from '../assets/tech.png';
import David from '../assets/david.png';
import Followers from '../components/user/Followers';

const profile = {
  name: 'Andy Mineo',
  stats: '26K likes • 165K followers',
  bio: "Combining an unparalleled stage presence with the smoothest voice in the industry, Bruno Mars could rightly be called the 21st century's answer to Michael Jackson.",
  rating: '100% recommended (20 reviews)',
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
    name: 'Rave',
    image: Rave,
    count: '95k',
    isSubscribed: true,
  },

  {
    id: 2,
    name: 'David',
    image: David,
    count: '95k',
    isSubscribed: true,
  },

  {
    id: 3,
    name: 'Even In The Day',
    image: Even,
    count: '95k',
    isSubscribed: true,
  },

  {
    id: 4,
    name: 'Future100',
    image: Num,
    count: '95k',
    isSubscribed: true,
  },

  {
    id: 5,
    name: 'Tech Bro',
    image: Techbro,
    count: '95k',
    isSubscribed: true,
  },

  {
    id: 6,
    name: 'ChilBiz',
    image: Chilbilz,
    count: '95k',
    isSubscribed: true,
  },
];

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('calendar');
  const [profileImage, setProfileImage] = useState(profile.imageUrl);
  const [bannerImage, setBannerImage] = useState(profile.coverImageUrl);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const profileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleBannerImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const triggerProfileImageUpload = () => {
    profileInputRef.current.click();
  };

  const triggerBannerImageUpload = () => {
    bannerInputRef.current.click();
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSaveProfile = (profileData) => {
    if (profileData.profileImage) {
      setProfileImage(URL.createObjectURL(profileData.profileImage));
    }
    // send  data to the backend
    console.log('Profile data saved:', profileData);
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
        console.log('Shared successfully');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      <div className="mt-24 mb-20">
        <div className="container">
          <div className="max-w-[1100px] mx-auto relative">
            <div className="relative group">
              <img
                src={bannerImage}
                alt="Profile cover"
                className="h-32 w-full object-cover lg:h-[291px] rounded-xl cursor-pointer"
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
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
              onClick={triggerBannerImageUpload}
            >
              <PencilIcon className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          {/* Profile header */}
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-12 sm:-mt-16 px-4 sm:px-0">
                <div className="flex items-end space-x-5">
                  <div className="relative group">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="h-24 w-24 rounded-full ring-4 ring-background sm:h-32 sm:w-32 cursor-pointer"
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
                      className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md"
                      onClick={triggerProfileImageUpload}
                    >
                      <PencilIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-lg"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-black bg-white  rounded-lg"
                  >
                    <img src={Star} alt="Rate" className="h-4 w-4 mr-2" />
                    Rate
                  </button>
                  <Button
                    className="bg-white rounded-2xl p-2"
                    onClick={handleShare}
                  >
                    <img src={Share} className="w-6 h-6 object-contain" />
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="md:text-400 font-700 text-black">
                  {profile.name}
                </h2>
                <p className="text-sm text-black">{profile.stats}</p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  {Object.entries(profile.social).map(([key, icon]) => (
                    <img key={key} src={icon} alt={key} className="size-5" />
                  ))}
                </div>

                <div className="mt-4 sm:mt-0 flex space-x-6">
                  <button
                    className={`font-600 ${
                      activeTab === 'calendar'
                        ? 'text-black'
                        : 'text-foreground'
                    }`}
                    onClick={() => setActiveTab('calendar')}
                  >
                    Calendar
                  </button>
                  <button
                    className={`font-600 ${
                      activeTab === 'following'
                        ? 'text-black'
                        : 'text-foreground'
                    }`}
                    onClick={() => setActiveTab('following')}
                  >
                    Following
                  </button>
                </div>
              </div>

              <hr className="text-[#000]/15 mt-16" />
            </div>

            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
              <div className="md:sticky md:top-28 md:self-start">
                <UserBio profile={profile} />

                <Calendar onSelectDate={handleDateSelect} />
              </div>
              {activeTab === 'calendar' && (
                <TechEvents selectedDate={selectedDate} />
              )}

              <div className="h-full">
                <h2 className="font-600 text-300 mb-4">Subscriptions</h2>
                {activeTab === 'following' && (
                  <div className="bg-white space-y-10 rounded-xl p-6">
                    {followers.map((follower) => (
                      <Followers key={follower.id} follower={follower} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <EditProfileModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            profile={profile}
            onSave={handleSaveProfile}
          />
        )}
      </div>
    </>
  );
};

export default UserProfile;
