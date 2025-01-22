import React from "react";
import Feels from "../../assets/feels.png";
import Wave from "../../assets/wave.png";
import Groove from "../../assets/groove.png";
import Eko from "../../assets/eko.png";
import ArrowwLeft from "../../assets/arrowLeft.png";
import Num from "../../assets/hg.png";
import Rave from "../../assets/fgxg.png";
import Even from "../../assets/adscd.png";
import Chilbilz from "../../assets/adscd.png";
import Techbro from "../../assets/home.png";
import David from "../../assets/parties.png";
import Davids from "../../assets/sfsfs.png";

const cards = [
    {
      id: 1,
      name: "Technology",
      description: "800 Events",
      imgUrl: Num, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Business",
      description: "800 Events",
      imgUrl: Rave, // Replace with actual image URL
    },
    {
      id: 3,
      name: "ChilBiz",
      description: "800 Events",
      imgUrl: Even, // Replace with actual image URL
    },
    {
      id: 4,
      name: "TechBro",
      description: "800 Events",
      imgUrl: Chilbilz, // Replace with actual image URL
    },
    {
      id: 5,
      name: "TechBro",
      description: "800 Events",
      imgUrl: Techbro, // Replace with actual image URL
    },
    {
      id: 6,
      name: "TechBro",
      description: "800 Events",
      imgUrl: David, // Replace with actual image URL
    },
    {
      id: 7,
      name: "TechBro",
      description: "800 Events",
      imgUrl: Davids, // Replace with actual image URL
    },
    {
      id: 8,
      name: "TechBro",
      description: "800 Events",
      imgUrl: Chilbilz, // Replace with actual image URL
    },
 
  ];

const Category = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-4 px-4">
        <h2 className="text-[18px] font-medium">Featured Calendars</h2>
      </div>
      {/* Event Cards Container with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-start max-w-screen-xl px-4">
  {cards.map((card) => (
    <div
      key={card.id}
      className="bg-white rounded-md p-8 flex flex-col justify-between items-start border border-gray-200"
      style={{
        width: "250px", // Set a consistent width for all cards
        minWidth: "250px", // Prevent shrinking below this width
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14"
          style={{
            backgroundImage: `url(${card.imgUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            borderRadius: "9px",
          }}
        ></div>
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

export default Category;
