<<<<<<< HEAD
import { useState } from 'react';
import { Search } from 'lucide-react';
import boluvard from '../../../assets/boluvard.png';
import love from '../../../assets/love.png';
=======
import { useState } from "react";
import { Search } from "lucide-react";
import boluvard from "../../../assets/boluvard.png";
import love from "../../../assets/love.png";
>>>>>>> f9919fc (texts corrections)

const activity = [
  {
    id: 1,
<<<<<<< HEAD
    type: 'created',
    person: { name: '24th, Dec.' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'edited',
    person: { name: '28th, Nov.' },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
=======
    type: "created",
    person: { name: "24th, Dec." },
    date: "7d ago",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 2,
    type: "edited",
    person: { name: "28th, Nov." },
    date: "6d ago",
    dateTime: "2023-01-23T11:03",
>>>>>>> f9919fc (texts corrections)
  },
];

const events = [
  {
    id: 1,
<<<<<<< HEAD
    time: '8 - 9:00AM',
    title: 'Love in the Boulevard',
    location: 'Hard Rock',
    region: 'Federal Capital Territory',
    image: boluvard,
    attendees: [
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ],
    status: 'Going',
=======
    time: "8 - 9:00AM",
    title: "Love in the Boulevard",
    location: "Hard Rock",
    region: "Federal Capital Territory",
    image: boluvard,
    attendees: [
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
>>>>>>> f9919fc (texts corrections)
  },

  {
    id: 2,
<<<<<<< HEAD
    time: '10 - 11:00AM',
    title: 'City Lights',
    location: 'Downtown',
    region: 'Federal Capital Territory',
    image: love,
    attendees: [
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ],
    status: 'Going',
=======
    time: "10 - 11:00AM",
    title: "City Lights",
    location: "Downtown",
    region: "Federal Capital Territory",
    image: love,
    attendees: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
>>>>>>> f9919fc (texts corrections)
  },
];

const EventCard = ({ event }) => {
  return (
<<<<<<< HEAD
    <div className="md:flex md:items-start md:gap-4 p-4 bg-white rounded-xl">
      <img
        src={event.image}
        alt={event.title}
        className="size-[80px] mb-2 md:mb-0 md:size-[130px] rounded-lg object-cover"
=======
    <div className="rounded-xl bg-white p-4 md:flex md:items-start md:gap-4">
      <img
        src={event.image}
        alt={event.title}
        className="mb-2 size-[80px] rounded-lg object-cover md:mb-0 md:size-[130px]"
>>>>>>> f9919fc (texts corrections)
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">{event.time}</span>
<<<<<<< HEAD
        <h3 className="text-200 font-600 ">{event.title}</h3>
        <p className="text-100 text-foreground/70">{event.location}</p>
        <p className="text-100 text-foreground mb-2">{event.region}</p>

        <div>
          <div className="flex -space-x-2 mb-4 md:mb-0">
            {event.attendees.slice(0, 4).map((attendee, index) => (
              <div
                key={index}
                className="size-[30px] rounded-full border-2 border-card overflow-hidden"
=======
        <h3 className="text-200 font-600">{event.title}</h3>
        <p className="text-100 text-foreground/70">{event.location}</p>
        <p className="mb-2 text-100 text-foreground">{event.region}</p>

        <div>
          <div className="mb-4 flex -space-x-2 md:mb-0">
            {event.attendees.slice(0, 4).map((attendee, index) => (
              <div
                key={index}
                className="size-[30px] overflow-hidden rounded-full border-2 border-card"
>>>>>>> f9919fc (texts corrections)
              >
                <img
                  src={attendee}
                  alt="Attendee"
<<<<<<< HEAD
                  className="w-full h-full object-cover"
=======
                  className="h-full w-full object-cover"
>>>>>>> f9919fc (texts corrections)
                />
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <span className="text-50 text-foreground/50 px-4 py-1 rounded-xl border border-[#000]/15 bg-[#f9f9f9]">
=======
      <span className="rounded-xl border border-[#000]/15 bg-[#f9f9f9] px-4 py-1 text-50 text-foreground/50">
>>>>>>> f9919fc (texts corrections)
        {event.status}
      </span>
    </div>
  );
};

const DayEvents = ({ day, dayEvents, isLastDay }) => {
  return (
    <div className="relative">
      {/* Day heading with timeline bullet */}
<<<<<<< HEAD
      <div className="relative flex items-center mb-2">
        <div className="relative">
          {/* Timeline bullet */}
          <div className="absolute left-0 top-[-1rem] w-4 h-4 bg-black rounded-full z-10"></div>

          {/* Vertical dashed line */}
          {!isLastDay && (
            <div className="absolute h-[850px]  left-[.4rem] top-[-1rem] w-0 border-l-2 border-dashed border-foreground"></div>
=======
      <div className="relative mb-2 flex items-center">
        <div className="relative">
          {/* Timeline bullet */}
          <div className="absolute left-0 top-[-1rem] z-10 h-4 w-4 rounded-full bg-black"></div>

          {/* Vertical dashed line */}
          {!isLastDay && (
            <div className="absolute left-[.4rem] top-[-1rem] h-[850px] w-0 border-l-2 border-dashed border-foreground"></div>
>>>>>>> f9919fc (texts corrections)
          )}
        </div>

        {/* Day label */}
<<<<<<< HEAD
        <h3 className="text-200 font-500 text-black ml-6 mb-4">
=======
        <h3 className="mb-4 ml-6 text-200 font-500 text-black">
>>>>>>> f9919fc (texts corrections)
          {day.person.name}
        </h3>
      </div>

<<<<<<< HEAD
      <div className="space-y-3 ml-6 pl-2">
=======
      <div className="ml-6 space-y-3 pl-2">
>>>>>>> f9919fc (texts corrections)
        {dayEvents.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            isLast={isLastDay && index === dayEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TechEvents = () => {
  const [showSearch, setShowSearch] = useState(false);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
=======
  const [searchQuery, setSearchQuery] = useState("");
>>>>>>> f9919fc (texts corrections)

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Filter events based on search query if provided
  const filteredEvents = searchQuery
    ? events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<< HEAD
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
=======
          event.location.toLowerCase().includes(searchQuery.toLowerCase()),
>>>>>>> f9919fc (texts corrections)
      )
    : events;

  const eventsGroupedByDay = activity.map((day, index) => {
    return {
      day,
      events: filteredEvents,
      isLastDay: index === activity.length - 1,
    };
  });

  return (
    <div>
      <div className="mb-6">
<<<<<<< HEAD
        <div className="flex justify-between items-center">
          <h2 className="text-400 font-600 mb-2">Nearby Events</h2>
=======
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-400 font-600">Events</h2>
>>>>>>> f9919fc (texts corrections)
          <div className="relative flex items-center">
            {showSearch ? (
              <div className="absolute right-0 top-[-1rem]">
                <input
                  type="text"
                  placeholder="Search events..."
<<<<<<< HEAD
                  className="p-2 border w-[250px] border-[#000]/15 rounded-md bg-card focus:outline-none"
=======
                  className="w-[250px] rounded-md border border-[#000]/15 bg-card p-2 focus:outline-none"
>>>>>>> f9919fc (texts corrections)
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={toggleSearch}
<<<<<<< HEAD
                className="p-2 bg-white rounded-full"
=======
                className="rounded-full bg-white p-2"
>>>>>>> f9919fc (texts corrections)
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="space-y-10 relative pl-2">
=======
      <div className="relative space-y-10 pl-2">
>>>>>>> f9919fc (texts corrections)
        {eventsGroupedByDay.map(({ day, events, isLastDay }) => (
          <DayEvents
            key={day.id}
            day={day}
            dayEvents={events}
            isLastDay={isLastDay}
          />
        ))}

        {filteredEvents.length === 0 && (
<<<<<<< HEAD
          <div className="text-center py-8">
=======
          <div className="py-8 text-center">
>>>>>>> f9919fc (texts corrections)
            <p className="text-foreground/60">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEvents;
