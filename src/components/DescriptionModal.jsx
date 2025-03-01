import React from 'react';
import { X } from 'lucide-react';
import Avatar from '../assets/avatars.png'

const DescriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 -mt-80">
      {/* Backdrop with Blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md " onClick={onClose}></div>
     
      <div className="bg-white rounded-xl shadow-lg z-10 w-[550px] max-h-[80vh] overflow-hidden">
        <div className="w-full flex justify-between items-center border-b border-[#00000040] px-2 py-2">
          <h2 className="text-300 font-500 px-4">Description</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
            <X size={24} />
          </button>
        </div>
       
        <div className="p-8 flex flex-col space-y-4 h-[300px] overflow-y-auto scrollbar-hide bg-modalbg">
          <p className='text-200'>Global community and platform dedicated to empowering professionals, executives, entrepreneurs, and leaders to drive Change.</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2  border-t py-2 pr-2 border-[#00000040]">
          <button className="px-8 py-1.5 bg-modalbutton text-white font-600 rounded-xl">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
