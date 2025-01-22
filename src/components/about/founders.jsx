import React from "react";
import Feels from "../../assets/joel.png";
import Wave from "../../assets/favour.png";
import Groove from "../../assets/groove.png";
import Eko from "../../assets/eko.png";

const events = [
  {
    title: "Akpor .E. Favour",
    date: "Founder & CEO",
    price: "#28,000",
    location: "Abuja, Nigeria",
    category: "Party",
    image: Feels,
  },
  {
    title: "Joel Banks",
    date: "Co-founder & CPO",
    price: "#150,000",
    location: "Abuja, Nigeria",
    category: "Party",
    image: Wave,
  },

];

const TrendingEvents = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-4 px-4">
        <h2 className="text-[24px] font-medium">Founders</h2>
       
      </div>
      {/* Event Cards Container with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start max-w-screen-xl px-4 ">
  {events.map((event, index) => (
    <div
      key={index}
      className="bg-white  rounded-xl rounded-bl-[40px] rounded-br-[40px] w-full flex flex-col border border-gray-400"
    >
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-3/4 object-cover" 
      />
      {/* Event Details */}
      <div className="mt-4 flex flex-col flex-grow p-4">
      
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-gray-600 text-sm">{event.date}</p>
        {/* <p className="text-gray-800 font-bold text-lg">{event.price}</p>
        <p className="text-gray-500 text-sm">{event.location}</p> */}
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default TrendingEvents;
