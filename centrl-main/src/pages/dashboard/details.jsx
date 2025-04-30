import { useState } from 'react';
import FilterSidebar from '../FilterSidebar';
import Groove from '../../assets/grove.png';
import Live from '../../assets/live.png';
import Skating from '../../assets/skating.png';
import Pride from '../../assets/prideland.png';
import EventCard from '../EventCard';
// import TrendingSvg from '../../assets/trending-icon.svg';
import Header from './header';

const events = [
  {
    id: 1,
    title: 'Groove SketchPond',
    date: '27th, Nov',
    price: 10000,
    location: 'Abuja, Nigeria',
    category: 'Party',
    image: Groove,
  },
  {
    id: 2,
    title: 'The Feels',
    date: '27th, Nov',
    price: 28000,
    location: 'Abuja, Nigeria',
    category: 'Concert',
    image: Live,
  },
  {
    id: 3,
    title: 'Heat Wave',
    date: '27th, Nov',
    price: 150000,
    location: 'Abuja, Nigeria',
    category: 'Business',
    image: Skating,
  },
  {
    id: 4,
    title: 'Even in the Day',
    date: '27th, Nov',
    price: 95000,
    location: 'Abuja, Nigeria',
    category: 'Technology',
    image: Pride,
  },
  {
    id: 5,
    title: 'Groove SketchPond',
    date: '27th, Nov',
    price: 10000,
    location: 'Abuja, Nigeria',
    category: 'Party',
    image: Groove,
  },
  {
    id: 6,
    title: 'The Feels',
    date: '27th, Nov',
    price: 28000,
    location: 'Abuja, Nigeria',
    category: 'Concert',
    image: Live,
  },
  {
    id: 7,
    title: 'Heat Wave',
    date: '27th, Nov',
    price: 150000,
    location: 'Abuja, Nigeria',
    category: 'Business',
    image: Skating,
  },
  {
    id: 8,
    title: 'Even in the Day',
    date: '27th, Nov',
    price: 95000,
    location: 'Abuja, Nigeria',
    category: 'Technology',
    image: Pride,
  },
];

const Trending = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
     <Header/>
      <div className="mt-2 lg:mt-2">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div></div>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border shadow-sm hover:bg-gray-50"
            >
              Filters
            </button>
          </div>

          <div className="lg:flex lg:gap-8">
            <FilterSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1">
              <div className="flex items-center mb-6 gap-2">
                <h1 className="text-300 font-600 ">Trending</h1>
                {/* <img src={TrendingSvg} alt="Trending Svg" /> */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
