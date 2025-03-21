import userBg from '../assets/userProfile.png';
import Avatar from '../assets/day.png';
import Star from '../assets/Star.png';
import Share from '../assets/share-ico.png';
import X from '../assets/X.png';
import Facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import TechEvents from '../components/dashboard/eventsCalender/TechEvents';
import Calendar from '../components/dashboard/eventsCalender/Calender';
import UserBio from '../components/user/UserBio';
import { Button } from '@headlessui/react';
import ProfileQRCode from '../components/user/ProfileQrCode';

const profile = {
  name: 'Even in the Day',
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

const UserViewProfile = () => {
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
                src={profile.coverImageUrl}
                alt="Profile cover"
                className="h-32 w-full object-cover lg:h-[291px] rounded-xl"
              />
            </div>
          </div>
          {/* Profile header */}
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-12 sm:-mt-16 px-4 sm:px-0">
                <div className="flex items-end space-x-5">
                  <div className="relative group">
                    <img
                      src={profile.imageUrl}
                      alt="Profile"
                      className="h-24 w-24 rounded-full ring-4 ring-background sm:h-32 sm:w-32"
                    />
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2  text-white bg-subColorBtn rounded-lg"
                  >
                    Subscribe
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

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-6">
                    <h2 className="md:text-500 font-700 text-black">
                      {profile.name}
                    </h2>
                    <p className="text-sm text-black">{profile.stats}</p>
                  </div>

                  <div className="flex gap-4">
                    {Object.entries(profile.social).map(([key, icon]) => (
                      <img key={key} src={icon} alt={key} className="size-5" />
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-0">
                  <ProfileQRCode profile={profile} />
                </div>
              </div>

              <hr className="text-[#000]/15 mt-16" />
            </div>

            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
              <div className="md:sticky md:top-28 md:self-start">
                <UserBio profile={profile} />

                <Calendar />
              </div>
              <TechEvents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserViewProfile;
