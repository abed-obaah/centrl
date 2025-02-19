import Groove from '../assets/grove.png';
import Live from '../assets/live.png';
import Skating from '../assets/skating.png';
import Pride from '../assets/prideland.png';
import { ArrowRight } from 'iconsax-react';
import { Link } from 'react-router-dom';

const events = [
  {
    title: 'Groove SketchPond',
    date: '27th, Nov',
    price: 10000,
    location: 'Abuja, Nigeria',
    category: 'Party',
    image: Groove,
  },
  {
    title: 'The Feels',
    date: '27th, Nov',
    price: 28000,
    location: 'Abuja, Nigeria',
    category: 'Concert',
    image: Live,
  },
  {
    title: 'Heat Wave',
    date: '27th, Nov',
    price: 150000,
    location: 'Abuja, Nigeria',
    category: 'Business',
    image: Skating,
  },
  {
    title: 'Even in the Day',
    date: '27th, Nov',
    price: 95000,
    location: 'Abuja, Nigeria',
    category: 'Technology',
    image: Pride,
  },
];

const categoryColors = {
  Party: 'bg-[#0C6724]',
  Concert: 'bg-[#67380C]',
  Business: 'bg-[#0C4367]',
  Technology: 'bg-[#380C67]',
};

const NewEvents = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="flex justify-between flex-wrap items-center w-full mb-8">
          <h2 className="text-400 md:text-500 font-700">New Events</h2>

          <button className="text-[#000] gap-2 flex items-center">
            <span className="font-700">View More </span>
            <ArrowRight size="20" />
          </button>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {events.map((event, index) => (
            <div key={index} className="bg-card rounded-lg w-full mb-6">
              <Link className="inline-block" to="/details">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-tr-lg rounded-tl-lg  h-3/4 object-cover"
                />
              </Link>

              <div className="flex flex-col flex-grow p-4">
                <div className="flex justify-start">
                  <button
                    className={`text-[#fff] text-50 mb-3 font-500 px-4 py-1 rounded-xl ${
                      categoryColors[event.category] || 'bg-[black]'
                    }`}
                  >
                    {event.category}
                  </button>
                </div>
                <h3 className="text-300 font-500">{event.title}</h3>
                <div className="mb-2">
                  <p className="text-[#000]/50 text-100">{event.date}</p>
                  <p className="text-[#000]/50 text-100">{event.location}</p>
                </div>
                <p className="text-[#000] font-600 text-300">
                  {event.price.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
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
