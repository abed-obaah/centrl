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
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="rounded-xl bg-white p-4 md:flex md:items-start md:gap-4">
      <img
        src={event.image}
        alt={event.title}
        className="mb-2 size-[80px] rounded-lg object-cover md:mb-0 md:size-[130px]"
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">{event.time}</span>
        <h3 className="text-200 font-600">{event.title}</h3>
        <p className="text-100 text-foreground/70">{event.location}</p>
        <p className="mb-2 text-100 text-foreground">{event.region}</p>

        <div>
          <div className="mb-4 flex -space-x-2 md:mb-0">
            {event.attendees.slice(0, 4).map((attendee, index) => (
              <div
                key={index}
                className="size-[30px] overflow-hidden rounded-full border-2 border-card"
              >
                <img
                  src={attendee}
                  alt="Attendee"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="rounded-xl border border-[#000]/15 bg-[#f9f9f9] px-4 py-1 text-50 text-foreground/50">
        {event.status}
      </span>
    </div>
  );
};

const DayEvents = ({ day, dayEvents, isLastDay }) => {
  return (
    <div className="relative">
      {/* Day heading with timeline bullet */}
      <div className="relative mb-2 flex items-center">
        <div className="relative">
          {/* Timeline bullet */}
          <div className="absolute left-0 top-[-1rem] z-10 h-4 w-4 rounded-full bg-black"></div>

          {/* Vertical dashed line */}
          {!isLastDay && (
            <div className="absolute left-[.4rem] top-[-1rem] h-[850px] w-0 border-l-2 border-dashed border-foreground"></div>
          )}
        </div>

        {/* Day label */}
        <h3 className="mb-4 ml-6 text-200 font-500 text-black">
          {day.person.name}
        </h3>
      </div>

      <div className="ml-6 space-y-3 pl-2">
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
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Filter events based on search query if provided
  const filteredEvents = searchQuery
    ? events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()),
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
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-400 font-600">Events</h2>
          <div className="relative flex items-center">
            {showSearch ? (
              <div className="absolute right-0 top-[-1rem]">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-[250px] rounded-md border border-[#000]/15 bg-card p-2 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={toggleSearch}
                className="rounded-full bg-white p-2"
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative space-y-10 pl-2">
        {eventsGroupedByDay.map(({ day, events, isLastDay }) => (
          <DayEvents
            key={day.id}
            day={day}
            dayEvents={events}
            isLastDay={isLastDay}
          />
        ))}

        {filteredEvents.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-foreground/60">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEvents;
