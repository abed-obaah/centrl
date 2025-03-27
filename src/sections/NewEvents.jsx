import Groove from "../assets/grove.png";
import Live from "../assets/live.png";
import Skating from "../assets/skating.png";
import Pride from "../assets/prideland.png";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import Image from "../components/Image";

const events = [
  {
    title: "Groove SketchPond",
    date: "27th, Nov",
    price: 10000,
    location: "Abuja, Nigeria",
    category: "Party",
    image: Groove,
  },
  {
    title: "The Feels",
    date: "27th, Nov",
    price: 28000,
    location: "Abuja, Nigeria",
    category: "Concert",
    image: Live,
  },
  {
    title: "Heat Wave",
    date: "27th, Nov",
    price: 150000,
    location: "Abuja, Nigeria",
    category: "Business",
    image: Skating,
  },
  {
    title: "Even in the Day",
    date: "27th, Nov",
    price: 95000,
    location: "Abuja, Nigeria",
    category: "Technology",
    image: Pride,
  },
];

const categoryColors = {
  Party: "bg-[#0C6724]",
  Concert: "bg-[#67380C]",
  Business: "bg-[#0C4367]",
  Technology: "bg-[#380C67]",
};

const NewEvents = () => {
  return (
    <section className="pt-20">
      <div className="container 2xl:max-w-[1200px]">
        <div className="mb-8 flex w-full flex-wrap items-center justify-between">
          <h2 className="text-400 font-700 md:text-500">New Events</h2>

          <Link
            to="/details"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[#000]"
          >
            <span className="font-700">View More </span>
            <ArrowRight size="20" />
          </Link>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {events.map((event, index) => (
            <div key={index} className="mb-6 w-full rounded-lg bg-card">
              <Link className="inline-block" to="/details">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="h-3/4 w-full rounded-tl-lg rounded-tr-lg object-cover"
                />
              </Link>

              <div className="flex flex-grow flex-col p-4">
                <div className="flex justify-start">
                  <button
                    className={`mb-3 rounded-xl px-4 py-1 text-50 font-500 text-[#fff] ${
                      categoryColors[event.category] || "bg-[black]"
                    }`}
                  >
                    {event.category}
                  </button>
                </div>
                <h3 className="text-300 font-500">{event.title}</h3>
                <div className="mb-2">
                  <p className="text-100 text-[#000]/50">{event.date}</p>
                  <p className="text-100 text-[#000]/50">{event.location}</p>
                </div>
                <p className="text-300 font-600 text-[#000]">
                  {event.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewEvents;
