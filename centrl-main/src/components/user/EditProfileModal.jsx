import { useState } from 'react';
import { X } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, profile, onSave }) => {
  const [firstName, setFirstName] = useState(profile.firstName || 'Andy');
  const [lastName, setLastName] = useState(profile.lastName || 'Mineo');
  const [additionalName, setAdditionalName] = useState(
    profile.additionalName || 'El perro'
  );
  const [tagline, setTagline] = useState(profile.tagline || '');
  const [bio, setBio] = useState(profile.bio || '');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      firstName,
      lastName,
      additionalName,
      bio,
      tagline,
    });
  };

  return (
    <div className="fixed z-[600]  inset-0  flex items-center justify-center ">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="bg-white z-[800] max-h-[90vh] overflow-y-auto   rounded-lg w-full max-w-[600px] mx-4">
        <div className="flex justify-between items-center p-6 border-b border-[#000]/15">
          <span className="text-100 font-500">Edit Profile</span>
          <button onClick={onClose} className="text-black hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 ">
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
            <label className="block text-foreground font-500 mb-2">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder="Your Bio"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="block text-foreground font-500 mb-2">
              Tagline
            </label>
            <textarea
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
              placeholder="Global campaigns and platform dedicated to companies"
              className="w-full p-2 border rounded-md"
            />
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
