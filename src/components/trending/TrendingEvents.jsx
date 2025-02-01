import React from "react";
import Feels from "../../assets/feels.png";
import Wave from "../../assets/wave.png";
import Groove from "../../assets/groove.png";
import Eko from "../../assets/eko.png";
import { Link } from "react-router-dom";
  import { ArrowRight} from "iconsax-react";

const events = [
  {
    title: "The Feels",
    date: "27th, Nov",
    price: "#28,000",
    location: "Abuja, Nigeria",
    category: "Party",
    image: Feels,
  },
  {
    title: "Heat Wave",
    date: "27th, Nov",
    price: "#150,000",
    location: "Abuja, Nigeria",
    category: "Concert",
    image: Wave,
  },
  {
    title: "Groove SketchPond",
    date: "27th, Nov",
    price: "#10,000",
    location: "Abuja, Nigeria",
    category: "Business",
    image: Groove,
  },
  {
    title: "Even in the Day",
    date: "27th, Nov",
    price: "#95,000",
    location: "Abuja, Nigeria",
    category: "Technology",
    image: Eko,
  },
];

const categoryColors = {
  Party: "bg-[#0C6724]", // Green
  Concert: "bg-[#67380C]", // Orange
  Business: "bg-[#0C4367]", // Pinkish
  Technology: "bg-[#380C67]", // Blue
};

const TrendingEvents = () => {
  return (
    <div className="flex flex-col items-center py-20">
    
      <div className="flex justify-between items-center w-full max-w-7xl mb-4 px-4">
        <h2 className="text-2xl font-medium">Trending Events</h2>
       
          <div className="text-[#000] flex  items-center space-x-2 px-8 py-2 rounded-lg hover:bg-blue-600 transition">
              <p>View More </p>
              <ArrowRight size="20"/>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start max-w-screen-xl px-4">
  {events.map((event, index) => (
    <div
      key={index}
      className="bg-white  rounded-lg w-full flex flex-col"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-3/4 object-cover" 
      />
      <div className="mt-4 flex flex-col flex-grow p-4">
      <div className="flex justify-start">
      <Link to="/details" className="text-blue-600 hover:underline">
        <button
                               className={`text-white text-sm px-4 py-1 rounded-md ${
                                categoryColors[event.category] || "bg-gray-400"
                              }`}
                            >
                              {event.category}
                            </button>
      </Link>
        
        </div>
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-gray-600 text-sm">{event.date}</p>
        <p className="text-gray-800 font-bold text-lg">{event.price}</p>
        <p className="text-gray-500 text-sm">{event.location}</p>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default TrendingEvents;
