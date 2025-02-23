import AsabaImg from '../assets/asaba.png';
import BeninImg from '../assets/benin.png';
import WarriImg from '../assets/warri.png';
import NairobiImg from '../assets/nairobi.png';
import CapetownImg from '../assets/cape-town.png';
import KadunaImg from '../assets/kaduna.png';
import KampalaImg from '../assets/kampala.png';
import LagosImg from '../assets/lagos.png';
import Category from './Category';
import { Calendar } from 'iconsax-react';
import CalendarListings from './CalendarListings';

const events = [
  {
    id: 1,
    name: 'Lagos',
    description: '7 Events',
    img: LagosImg,
  },
  {
    id: 2,
    name: 'Nairobi',
    description: '7 Events',
    img: NairobiImg,
  },
  {
    id: 3,
    name: 'Warri',
    description: '7 Events',
    img: WarriImg,
  },
  {
    id: 4,
    name: 'Benin',
    description: '7 Events',
    img: BeninImg,
  },
  {
    id: 5,
    name: 'Benin',
    description: '7 Events',
    img: BeninImg,
  },
  {
    id: 6,
    name: 'Asaba',
    description: '7 Events',
    img: AsabaImg,
  },
  {
    id: 7,
    name: 'Cape Town',
    description: '7 Events',
    img: CapetownImg,
  },
  {
    id: 8,
    name: 'Kampala',
    description: '7 Events',
    img: KampalaImg,
  },
  {
    id: 9,
    name: 'Kaduna',
    description: '7 Events',
    img: KadunaImg,
  },
  {
    id: 10,
    name: 'Kaduna',
    description: '7 Events',
    img: KadunaImg,
  },
  {
    id: 11,
    name: 'Asaba',
    description: '7 Events',
    img: AsabaImg,
  },
  {
    id: 12,
    name: 'Cape Town',
    description: '7 Events',
    img: CapetownImg,
  },
  {
    id: 13,
    name: 'Kampala',
    description: '7 Events',
    img: KampalaImg,
  },
  {
    id: 14,
    name: 'Kaduna',
    description: '7 Events',
    img: KadunaImg,
  },
  {
    id: 15,
    name: 'Kaduna',
    description: '7 Events',
    img: KadunaImg,
  },
  {
    id: 16,
    name: 'Asaba',
    description: '7 Events',
    img: AsabaImg,
  },
  {
    id: 17,
    name: 'Cape Town',
    description: '7 Events',
    img: CapetownImg,
  },
  {
    id: 18,
    name: 'Cape Town',
    description: '7 Events',
    img: CapetownImg,
  },
];

const Events = () => {
  return (
    <div className="mt-16">
      <div className="mb-10">
        <h2 className="font-600 text-300 mb-8">Explore Local Events</h2>
        <span className="border px-4 py-2  border-[#000] font-600 rounded-2xl">
          Africa
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {events.map((event) => (
          <div key={event.id}>
            <div className="flex items-center gap-3">
              <img className="object-cover" src={event.img} alt={event.name} />

              <div>
                <p className="font-600">{event.name}</p>
                <span>{event.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Category />

      <div className="mt-20">
        <CalendarListings title="Favorite Celebrities" />
      </div>
    </div>
  );
};

export default Events;
