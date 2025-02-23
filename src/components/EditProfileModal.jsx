import React from 'react';
import { X } from 'lucide-react';
import Avatar from '../assets/avatars.png'

const EditProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop with Blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-lg z-10 w-[400px] max-h-[80vh] overflow-hidden">
        <div className="w-full flex justify-between items-center border-b border-[#00000040] px-2 py-2">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
            <X size={24} />
          </button>
        </div>

        {/* Profile Image */}
       <div className="flex items-center justify-between my-4 py-2 ml-10 border border-[#00000040] px-4 rounded-l-full rounded-r-[185.25rem] w-[350px]">
          <img 
            src={Avatar}
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover"
          />
          {/* <img
                                    alt=""
                                    src={Avatar}
                                    className="size-24 rounded-full ring-4 ring-white sm:size-32"
                                  /> */}
          <p className='font-600'>Profile photo</p>
          <button className="mt-2 px-4 py-1 bg-[#036CFF] text-[#fff] rounded-lg">Upload</button>
        </div>

        {/* Scrollable Form (with hidden scrollbar) */}
        <div className="px-4 flex flex-col space-y-4 h-[300px] overflow-y-auto scrollbar-hide">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-[#000]/30 mb-1">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="w-full py-1.5 px-4 rounded-xl bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-[#000]/30 mb-1">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="w-full py-1.5 px-4 rounded-xl bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="additional-name" className="block text-sm font-medium text-[#000]/30 mb-1">
              Additional name
            </label>
            <input
              id="additional-name"
              name="additional-name"
              type="text"
              autoComplete="family-name"
              className="w-full py-1.5 px-4 rounded-xl bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="tagline" className="block text-sm font-medium text-[#000]/30 mb-1">
              Tagline
            </label>
            <input
              id="tagline"
              name="tagline"
              type="text"
              autoComplete="family-name"
              className="w-full py-1.5 px-4 rounded-xl bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4 border-t py-2 pr-2 border-[#00000040]">
          <button className="px-8 py-1.5 bg-[#036CFF] text-[#fff] font-300 rounded-2xl">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
