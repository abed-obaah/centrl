import Groove from "../assets/grove.png";
import Live from "../assets/live.png";
import Skating from "../assets/skating.png";
import Pride from "../assets/prideland.png";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import React, { useEffect, useState } from 'react';
import { getEvents } from '../api/eventApi';
import { useDispatch, useSelector } from 'react-redux';

const categoryColors = {
  Party: "bg-[#0C6724]",
  Concert: "bg-[#67380C]",
  Business: "bg-[#0C4367]",
  Technology: "bg-[#380C67]",
};

const NewEvents = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents(token);
        console.log('events raw response:', response);

        if (response && response.status === 'success' && Array.isArray(response.data)) {
          // Map the API data to match your UI expectations
          const formattedEvents = response.data.map(event => ({
            id: event.id,
            title: event.event_title,
            date: formatDate(event.start_time),
            location: event.location || "Location not specified", // Add fallback if needed
            category: event.event_category || "General", // Add fallback if needed
            image: event.banner_image, // Since API doesn't provide images, use placeholder
            ticket_price_basic: event.ticket_price_diamond || "FREE" // Adjust based on your API field
          }));
          // Sort events by date (latest first)
          formattedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
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
  }, [token]);

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
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
    <section className="pt-20">
      <div className="container 2xl:max-w-[1200px]">
        <div className="mb-8 flex w-full flex-wrap items-center justify-between">
          <h2 className="text-400 font-700 md:text-500">Latest Events</h2>
  
          <Link
            to="/details"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-black"
          >
            <span className="font-700">View More</span>
            <ArrowRight size="20" />
          </Link>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Display only the first 4 sorted events */}
          {events.slice(0, 4).map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-lg flex flex-col h-full w-full max-w-[300px] mx-auto"
            >
              <Link
                className="inline-block"
                to="/details"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={event?.image}
                  alt={event?.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </Link>

              <div className="flex flex-grow flex-col p-4 justify-between h-full">
                <div>
                  <div className="flex justify-start">
                    <button
                      className={`mb-3 rounded-xl px-4 py-1 text-50 font-500 text-white ${
                        categoryColors[event.category] || "bg-[black]"
                      }`}
                    >
                      {event.category}
                    </button>
                  </div>
                  <h3 className="text-300 font-500">{event.title}</h3>
                  <div className="mb-2">
                    <p className="text-100 text-black/50">{event.date}</p>
                    <p className="text-100 text-black/50">
                      {event.location && event.location !== "null" ? event.location : "Location not specified"}
                    </p>
                  </div>
                </div>
                <p className="text-300 font-600 text-black">
                  {event.ticket_price_basic != null &&
                  !isNaN(Number(event.ticket_price_basic)) &&
                  Number(event.ticket_price_basic) > 0
                    ? Number(event.ticket_price_basic).toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        maximumFractionDigits: 0,
                      })
                    : "Free"}
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
