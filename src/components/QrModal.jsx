import React from 'react';

const QR = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop with Blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md" onClick={onClose}></div>

      {/* Outer Container for Rounded Gradient Border */}
      <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-[#F4667D] via-[#DA63B1] via-[#C379EA] to-[#F5C5AD]">
        
        {/* Modal Container */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 overflow-hidden">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
            ✖
          </button>

          {/* Profile Info */}
          <div className="flex items-center gap-3">
            <img src={profile.image} alt={profile.name} className="w-16 h-16" />
            <div>
                <div className='flex  items-center space-x-4'>
                            <h2 className="text-lg font-semibold">{profile.name}</h2>
                            <img src={profile.bluetick} alt={profile.bluetick} className="w-6 h-6" />
                </div>
             
              <p className="text-sm text-[#58585885]">Joined {profile.joined}</p>
            </div>
          </div>

          <div className="flex items-center space-x-5 justify-between">
            {/* Stats */}
            <div className="mt-4 space-y-2">
              <p className="text-[#58585885]"><strong className="text-[#000]">{profile.followers}</strong> Followers</p>
              <p className="text-[#58585885]"><strong className="text-[#000]">{profile.shares}</strong> Profile Shares</p>
              <p className="text-[#58585885]"><strong className="text-[#000]">{profile.competitions}</strong> Competitions</p>
              <p className="text-[#58585885]"><strong className="text-[#000]">{profile.events}</strong> Events Hosted</p>
              <p className="text-[#58585885]"><strong className="text-[#000]">{profile.collaborations}</strong> Collaborations</p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center my-4">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${profile.profileLink}`} alt="QR Code" />
            </div>
          </div>

          {/* Profile Links */}
          <div className="text-left space-y-2 mt-10">
            <div className="flex space-x-4 items-center">
              <img src={profile.imageSocials} alt={profile.imageSocials} className="w-6 h-6" />
              <div>
                <p className="text-[14px]">Your Profile</p>
                <p className="text-[#5192CE] text-[13px]">
                  <a href={profile.profileLink} target="_blank" rel="noopener noreferrer">{profile.profileLink}</a>
                </p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <img src={profile.imageSocial} alt={profile.imageSocial} className="w-6 h-6" />
              <div>
                <p className="text-[14px]">Email</p>
                <p className="text-[#5192CE] text-[13px]">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QR;
