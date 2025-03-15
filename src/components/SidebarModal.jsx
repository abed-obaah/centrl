import React from "react";
import rightArrow from "../assets/right-double.png";
import gray from "../assets/gray-rec.png";
import pastel from "../assets/pastel.png";
import Rectangle from "../assets/Rectangle.png";
import Ag from "../assets/Ag.png";
import Display from "../assets/display.png";
import pink from "../assets/pink-ball.png";
import recAG from "../assets/recAG.png";

export default function SideModal({ isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[600] bg-black/30 backdrop-blur-md transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Modal (Sliding from Right) */}
      <div
        className={`fixed right-0 top-3 z-[800] h-full w-[450px] overflow-y-auto rounded-xl bg-white p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative -mx-6 border-b-2 border-b-muted px-6 pb-10">
          <button
            onClick={onClose}
            className="text-gray-500 absolute left-4 top-0"
          >
            <img src={rightArrow} alt={rightArrow} className="h-5 w-5" />
          </button>
        </div>

        {/* Close Button */}
        {/* Modal Content */}
        <h2 className="my-4 text-100 font-400 text-black">Appearance</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          {/* Mono */}
          <div className="flex flex-col items-center">
            {/* <div className="bg-[#D2B8A3] w-36  h-20 rounded-lg"></div> */}
            <img src={Rectangle} alt={pastel} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Mono</span>
          </div>

          {/* Gradient */}
          <div className="flex flex-col items-center">
            {/* <div className="bg-gradient-to-r from-blue-400 to-green-300 w-36  h-20 rounded-lg"></div> */}
            <img src={pastel} alt={pastel} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Gradient</span>
          </div>

          {/* Name */}
          <div className="flex flex-col items-center">
            <img src={gray} alt={gray} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Name</span>
          </div>

          {/* Name */}
          <div className="flex flex-col items-center">
            <img src={gray} alt={gray} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Name</span>
          </div>

          {/* Name */}
          <div className="flex flex-col items-center">
            <img src={gray} alt={gray} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Name</span>
          </div>

          {/* Name */}
          <div className="flex flex-col items-center">
            <img src={gray} alt={gray} className="h-20 w-36" />
            <span className="text-sm font-medium mt-2">Name</span>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="mt-8 grid w-48 grid-cols-2 gap-8 rounded-lg bg-[#F9F5FF] p-2">
            <div className="flex items-center gap-2">
              <img src={pink} alt={rightArrow} className="h-8 w-8" />
              <span className="font-medium">Color</span>
              <select className="ml-auto w-20 bg-[#F9F5FF] px-1 py-1 text-muted">
                <option className="text-muted">Cranberry</option>
              </select>
            </div>
          </div>
          <div className="mt-8 grid w-48 grid-cols-2 gap-4 rounded-lg bg-[#F9F5FF] p-2">
            <div className="flex items-center gap-3">
              <img src={Display} alt={rightArrow} className="h-8 w-8" />
              <span className="font-medium">Style</span>
              <select className="ml-auto w-20 bg-[#F9F5FF] px-1 py-1 text-muted">
                <option className="text-muted">Cranberry</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-8 grid w-48 grid-cols-2 gap-4 rounded-xl bg-[#F9F5FF] p-2">
            <div className="flex items-center gap-3 py-2">
              {/* <span className="w-6 h-6 bg-pink-500 rounded-full"></span> */}
              <img src={Ag} alt={rightArrow} className="h-5 w-6" />
              <span className="font-medium">Font</span>
              <select className="w-20 bg-[#F9F5FF] px-1 py-1 text-muted">
                <option>Cranberry</option>
              </select>
            </div>
          </div>
          <div className="mt-8 grid w-48 grid-cols-2 gap-4 rounded-xl bg-[#F9F5FF] p-2">
            <div className="flex items-center gap-3">
              <img src={Display} alt={rightArrow} className="h-8 w-8" />
              <span className="font-medium">Display</span>
              <select className="ml-auto w-20 bg-[#F9F5FF] px-1 py-1 text-muted">
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

        <div className="relative -mx-6 mt-20 border-t-2 border-t-muted px-6 pb-10">
          <h2 className="mb-4 pt-10 text-100 font-400 text-black">
            Appearance
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Mono */}
            <div className="relative flex flex-col items-center">
              {/* Image */}
              <img src={recAG} alt={recAG} className="h-20 w-36" />

              {/* Centered Text */}
              <span className="font-bold text-lg absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 transform text-white">
                AG
              </span>

              {/* Label Below */}
              <span className="text-sm font-medium mt-2">Xone</span>
            </div>

            {/* Gradient */}
            <div className="flex flex-col items-center">
              <img src={pastel} alt={pastel} className="h-20 w-36" />
              <span className="text-sm font-medium mt-2">Gradient</span>
            </div>

            {/* Name */}
            <div className="flex flex-col items-center">
              <img src={gray} alt={gray} className="h-20 w-36" />
              <span className="text-sm font-medium mt-2">Name</span>
            </div>

            {/* Name */}
            <div className="flex flex-col items-center">
              <img src={gray} alt={gray} className="h-20 w-36" />
              <span className="text-sm font-medium mt-2">Name</span>
            </div>

            {/* Name */}
            <div className="flex flex-col items-center">
              <img src={gray} alt={gray} className="h-20 w-36" />
              <span className="text-sm font-medium mt-2">Name</span>
            </div>

            {/* Name */}
            <div className="flex flex-col items-center">
              <img src={gray} alt={gray} className="h-20 w-36" />
              <span className="text-sm font-medium mt-2">Name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
