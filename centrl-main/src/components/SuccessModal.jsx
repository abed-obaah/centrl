import { SearchNormal1 } from 'iconsax-react';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import x from '../assets/X.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50 -mt-36 px-20">
      <div className="rounded-xl  max-w-lg p-4 bg-[#F4F5F7] py-10 flex flex-col justify-between ">
        
        {/* Title */}
        <div className="flex flex-col text-left">
          <img src={logo} className="w-10 h-10 object-contain ml-3" />
          <h2 className="mt-4 text-black font-700 text-lg px-6">
            Thanks for Joining
          </h2>
          <p className="px-6 text-left text-black font-600">
            Welcome to the future of seamless event management!
          </p>
        </div>

        {/* Follow Section (Now at the bottom) */}
        <div className="mt-20 flex flex-col px-6">
          <h6 className="text-black font-600 text-sm">Follow Centrl on</h6>
          <div className="flex space-x-9 mt-2">
            <img src={facebook} className="w-6 h-6" />
            <img src={x} className="w-6 h-6" />
            <img src={instagram} className="w-6 h-6" />
            <img src={linkedin} className="w-6 h-6" />
          </div>
        </div>

        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-300"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default SuccessModal;
