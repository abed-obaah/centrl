import React from "react";
import Feels from "../../../assets/feels.png";
import Wave from "../../../assets/wave.png";
import Groove from "../../../assets/groove.png";
import Eko from "../../../assets/eko.png";
import ArrowwLeft from "../../../assets/arrowLeft.png";
import Num from "../../../assets/Future100.png";
import Rave from "../../../assets/rave.png";
import Even from "../../../assets/123.png";
import Chilbilz from "../../../assets/873.png";
import Techbro from "../../../assets/tech.png";
import David from "../../../assets/david.png";
import { Link } from "react-router-dom";

const cards = [
    {
      id: 1,
      name: "Future 100",
      description: "Join the community that revolves around tech.",
      imgUrl: Num, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Rave",
      description: "Join the community that revolves around tech.",
      imgUrl: Rave, // Replace with actual image URL
    },
    {
      id: 3,
      name: "ChilBiz",
      description: "Join the community that revolves around tech.",
      imgUrl: Even, // Replace with actual image URL
    },
    {
      id: 4,
      name: "TechBro",
      description: "Join the community that revolves around tech.",
      imgUrl: Chilbilz, // Replace with actual image URL
    },
    {
      id: 4,
      name: "TechBro",
      description: "Join the community that revolves around tech.",
      imgUrl: Techbro, // Replace with actual image URL
    },
    {
      id: 4,
      name: "TechBro",
      description: "Join the community that revolves around tech.",
      imgUrl: David, // Replace with actual image URL
    },
 
  ];

const TrendingEvents = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-4 px-4">
        <h2 className="text-=[15px] font-medium">Communities</h2>
      </div>
      {/* Event Cards Container with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-start max-w-screen-xl px-4">
      {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white  rounded-md p-8 flex flex-col gap-8 border border-gray-200"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14"
                style={{
                  backgroundImage: `url(${card.imgUrl})`,
                  backgroundSize: "contain",
                  borderRadius: "9px",
                }}
              ></div>
              <button className="bg-gray-300 text-black py-1 px-4 rounded-md font-semibold">
                Subscribe
              </button>
            </div>
            <div>
              <h2 className="text-lg font-bold">{card.name}</h2>
              <p className="text-[15px] text-[#B0B0B0] font-normal">{card.description}</p>
            </div>
          </div>
        ))}
    </div>



    </div>
  );
};

export default TrendingEvents;
