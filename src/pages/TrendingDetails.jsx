import React, { useEffect, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import Groove from '../assets/grove.png';
import EventCard from '../components/EventCard';
import TrendingSvg from '../assets/trending-icon.svg';
import { getEvents } from '../api/eventApi';
import { useDispatch, useSelector } from 'react-redux';

const TrendingDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);
  
  // Filter state
  const [filter, setFilter] = useState({
    price: null,
    category: null,
    location: null,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Pass the filter values to the API
        const response = await getEvents(token, filter);
        console.log('events raw response:', response);
  
        if (response && response.status === 'success' && Array.isArray(response.data)) {
          const formattedEvents = response.data.map(event => ({
            id: event.id,
            title: event.event_title,
            date: formatDate(event.start_time),
            location: event.location || 'Location not specified',
            category: event.event_category || 'General',
            image: event.banner_image,
            ticket_price_basic: event.ticket_price_diamond || 'FREE',
          }));
          setEvents(formattedEvents);
        } else {
          console.warn('Unexpected event data format');
          setEvents([]);
        }
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, [token, filter]);  // Run whenever filter changes
   // Run whenever filter changes

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  if (loading) {
    return (
      <section className="pt-20">
        <div className="container 2xl:max-w-[1200px]">
          <p>Loading events...</p>
        </div>
      </section>
    );
  }
  
  if (!loading && events.length === 0) {
    return (
      <section className="pt-20">
        <div className="container 2xl:max-w-[1200px]">
          <p>No events found.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="mt-36 lg:mt-20">
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
              filter={filter} // Pass current filter state
              onFilterChange={handleFilterChange} // Pass the filter change handler
            />

            <div className="flex-1">
              <div className="flex items-center mb-6 gap-2">
                <h1 className="text-300 font-600 ">Trending</h1>
                <img src={TrendingSvg} alt="Trending Svg" />
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

export default TrendingDetails;
