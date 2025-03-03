import { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import Rave from '../assets/rave.png';
import skating from '../assets/skating.png';
import pride from '../assets/prideland.png';
import prides from '../assets/groove.png';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  if (!modalVisible) return null;
  const navigate = useNavigate();

  return (
    <div className="fixed z-[600] inset-0 flex items-center justify-center">
      <div
        className="fixed  inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={() => setModalVisible(false)}
      />
      <div className="bg-background z-[800] shadow-lg w-full max-w-lg">
        {/* Search Bar */}
        <div className="flex items-center bg-white px-4 py-5">
          <input
            type="text"
            placeholder="Search for Events, calendars and more"
            className="bg-transparent outline-none w-full"
          />
          <SearchNormal1 size="20" className="text-gray-500 mx-2" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-gray-700 font-semibold text-sm px-6">
          Centrl. Top Events and Profiles
        </h2>

        {/* Event List */}
        <div className="mt-3 space-y-3 px-6">
          {[
            {
              name: 'Rave',
              followers: '95K',
              img: Rave,
              sub: '',
              screen: '/details-page',
            },
            {
              name: 'KashComing Live in Ibadan',
              sub: 'Kashcoming',
              img: skating,
              screen: '/details-page',
            },
            {
              name: 'Hakuna Matata Themed Park',
              sub: 'Pride Land',
              img: pride,
              screen: '/details-page',
            },
            {
              name: 'Skating Rink',
              sub: 'Pride Land',
              img: pride,
              screen: '/details-page',
            },
            {
              name: 'Circus',
              sub: 'Pride Land',
              img: prides,
              screen: '/details-page',
            },
          ].map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
              onClick={() => navigate(event.screen)}
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <p className="text-gray-900 font-medium">{event.name}</p>
                <p className="text-gray-500 text-sm">
                  {event.followers ? `${event.followers} followers` : event.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setModalVisible(false)}
          className="mt-4 w-full bg-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
