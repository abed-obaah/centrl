import React from "react";
import { X } from "lucide-react";

const DescriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] mt-10 flex justify-center">
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative z-10 h-[330px] w-[422px] rounded-xl bg-[#F4F5F7] shadow-lg">
        <div className="flex w-full items-center justify-between rounded-tl-xl rounded-tr-xl border-b border-[#00000040] bg-white px-2 py-2">
          <h2 className="px-4 text-300 font-500">Description</h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-200 rounded-full p-2"
          >
            <X size={24} />
          </button>
        </div>

        <p className="px-4 pt-6 text-50">
          Global community and platform dedicated to empowering professionals,
          executives, entrepreneurs, and leaders to drive Change.
        </p>

        {/* Buttons */}
        <div className="absolute bottom-0 right-0 w-full space-x-2 rounded-bl-xl rounded-br-xl bg-white py-3 pr-2 text-right">
          <button
            onClick={onClose}
            className="rounded-xl bg-modalbutton px-8 py-1.5 font-600 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
