import { useState } from 'react';
import { Upload, X } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, profile, onSave }) => {
  const [firstName, setFirstName] = useState(profile.firstName || 'Andy');
  const [lastName, setLastName] = useState(profile.lastName || 'Mineo');
  const [additionalName, setAdditionalName] = useState(
    profile.additionalName || 'El perro'
  );
  const [tagline, setTagline] = useState(profile.tagline || '');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(profile.imageUrl);
  const [videoName, setVideoName] = useState(profile.videoName || '');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFeaturedVideo(file);
      setVideoName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      firstName,
      lastName,
      additionalName,
      tagline,
      profileImage,
      featuredVideo,
    });
  };

  return (
    <div className="fixed z-[600]  inset-0  flex items-center justify-center ">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="bg-white z-[800] max-h-[90vh] overflow-y-auto   rounded-lg w-full max-w-[500px] mx-4">
        <div className="flex justify-between items-center p-4 border-b border-[#000]/15">
          <span className="text-100 font-500">Edit Profile</span>
          <button onClick={onClose} className="text-black hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 ">
          <div className="flex items-center px-3 py-2 justify-between border border-[#000]/15 rounded-bl-[10rem] rounded-tl-[10rem] rounded-br-[3rem] rounded-tr-[3rem] mb-10">
            <div className="relative flex items-center  gap-6">
              <img
                src={previewImage}
                alt="Profile photo"
                className="w-20 h-20 rounded-full object-cover"
              />
              <span className="text-100 font-700">Profile photo</span>
            </div>
            <div>
              <label className="bg-subColorBtn text-white px-4 py-2 rounded-md cursor-pointer text-sm">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block  text-foreground font-500 mb-2">
              First name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-foreground font-500 mb-2">
              Last name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-foreground font-500 mb-2">
              Additional name
            </label>
            <input
              type="text"
              value={additionalName}
              onChange={(e) => setAdditionalName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="block text-foreground font-500 mb-2">
              Tagline
            </label>
            <textarea
              name=""
              id=""
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
              placeholder="Global campaigns and platform dedicated to companies"
              className="w-full p-2 border rounded-md"
            />

            <div className="mb-6 mt-10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-200 font-700">Featured Video</h3>
                  <p className="max-w-[250px] mr-auto">
                    feature a video on your personal profile
                  </p>
                </div>
                <label className="bg-subColorBtn hover:bg-blue-600 text-white p-2  font-500 gap-3 rounded-md cursor-pointer  flex items-center ">
                  <Upload size={16} />
                  Upload Video
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoChange}
                  />
                </label>
              </div>
              {videoName && (
                <div className="mt-2 p-3 bg-gray-100 rounded-md">
                  <p className="text-sm font-medium truncate">{videoName}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-subColorBtn text-white px-6 py-2 rounded-md text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
