import React from "react";
import rightArrow from '../assets/right-double.png'
import gray from '../assets/gray-rec.png';
import pastel from '../assets/pastel.png';
import Rectangle from '../assets/Rectangle.png';
import Ag from '../assets/Ag.png'
import Display from '../assets/display.png'
import pink from '../assets/pink-ball.png'
import recAG from '../assets/recAG.png'

export default function SideModal({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay (Blurred Background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"
          onClick={onClose} // Close on background click
        ></div>
      )}

      {/* Modal (Sliding from Right) */}
      <div
        className={`fixed top-3 rounded-xl right-0 h-full w-[450px] bg-white p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
            <div className="-mx-6 border-b-2 border-b-muted pb-10 px-6 relative">
            <button
                onClick={onClose}
                className="absolute top-0 left-4 text-gray-500"
            >
               <img src={rightArrow} alt={rightArrow} className="w-5 h-5" />
            </button>
            </div>

        {/* Close Button */}
        {/* Modal Content */}
        <h2 className="text-100 text-black font-400 my-4">Appearance</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
        {/* Mono */}
        <div className="flex flex-col items-center">
          {/* <div className="bg-[#D2B8A3] w-36  h-20 rounded-lg"></div> */}
          <img src={Rectangle} alt={pastel } className=" w-36 h-20" />
          <span className="mt-2 text-sm font-medium">Mono</span>
        </div>

        {/* Gradient */}
        <div className="flex flex-col items-center">
          {/* <div className="bg-gradient-to-r from-blue-400 to-green-300 w-36  h-20 rounded-lg"></div> */}
          <img src={pastel} alt={pastel } className=" w-36 h-20" />
          <span className="mt-2 text-sm font-medium">Gradient</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>
      </div>


        <div className="flex justify-between mt-8">
        <div className="mt-8 grid grid-cols-2 gap-8 p-2 rounded-lg bg-[#F9F5FF]  w-48">
                <div className="flex items-center gap-2 ">
                <img src={pink} alt={rightArrow} className="w-8 h-8" />
                <span className="font-medium">Color</span>
                <select className="ml-auto bg-[#F9F5FF] px-1 py-1 w-20 text-muted">
                    <option className="text-muted">Cranberry</option>
                </select>
                </div>

            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 p-2 rounded-lg bg-[#F9F5FF]  w-48">
                <div className="flex items-center gap-3 ">
                <img src={Display} alt={rightArrow} className="w-8 h-8" />
                <span className="font-medium">Style</span>
                <select className="ml-auto bg-[#F9F5FF] px-1 py-1 w-20 text-muted">
                    <option className="text-muted">Cranberry</option>
                </select>
                </div>

            </div>
        </div>
        <div className="flex justify-between">
        <div className="mt-8 grid grid-cols-2 gap-4 p-2 rounded-xl bg-[#F9F5FF] w-48">
                <div className="flex items-center gap-3 py-2">
                {/* <span className="w-6 h-6 bg-pink-500 rounded-full"></span> */}
                <img src={Ag} alt={rightArrow} className="w-6 h-5" />
                <span className="font-medium">Font</span>
                <select className=" bg-[#F9F5FF] px-1 py-1 w-20 text-muted">
                    <option>Cranberry</option>
                </select>
                </div>

            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 p-2 rounded-xl bg-[#F9F5FF] w-48">
                <div className="flex items-center gap-3 ">
                <img src={Display} alt={rightArrow} className="w-8 h-8" />
                <span className="font-medium">Display</span>
                <select className="ml-auto bg-[#F9F5FF] px-1 py-1 w-20 text-muted">
                    <option>Auto</option>
                </select>
                </div>

            </div>
        </div>
      
        {/* Other Options */}
        {/* <div className="mt-6">
          <p className="text-sm">Color</p>
          <button className="w-full p-2 bg-pink-500 text-white rounded-md mt-2">
            Cranberry
          </button>
        </div> */}

<div className="-mx-6 border-t-2 border-t-muted pb-10 px-6 relative mt-20">
<h2 className="text-100 text-black font-400 mb-4 pt-10">Appearance</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
        {/* Mono */}
        <div className="relative flex flex-col items-center">
  {/* Image */}
  <img src={recAG} alt={recAG} className="w-36 h-20" />

  {/* Centered Text */}
  <span className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
    AG
  </span>

  {/* Label Below */}
  <span className="mt-2 text-sm font-medium">Xone</span>
</div>


        {/* Gradient */}
        <div className="flex flex-col items-center">
          <img src={pastel} alt={pastel } className=" w-36 h-20" />
          <span className="mt-2 text-sm font-medium">Gradient</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>

        {/* Name */}
        <div className="flex flex-col items-center">
        <img src={gray} alt={gray} className=" w-36  h-20" />
          <span className="mt-2 text-sm font-medium">Name</span>
        </div>
      </div>
</div>
   
      </div>
    </>
  );
}
