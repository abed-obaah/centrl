import { useState } from 'react';
import { Search } from 'lucide-react';
import boluvard from '../../../assets/boluvard.png';
import love from '../../../assets/love.png';

// Define activity data
const activity = [
  {
    id: 1,
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
  },
];

// Define events data
const events = [
  {
    id: 1,
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
  },

  {
    id: 2,
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
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
      <img
        src={event.image}
        alt={event.title}
        className="size-[130px] rounded-lg object-cover"
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">{event.time}</span>
        <h3 className="text-200 font-600 ">{event.title}</h3>
        <p className="text-100 text-foreground/70">{event.location}</p>
        <p className="text-100 text-foreground mb-2">{event.region}</p>

        <div>
          <div className="flex -space-x-2">
            {event.attendees.slice(0, 4).map((attendee, index) => (
              <div
                key={index}
                className="size-[30px] rounded-full border-2 border-card overflow-hidden"
              >
                <img
                  src={attendee}
                  alt="Attendee"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-2">
        {/* Search Input */}
        <span className="text-50 text-foreground/50 px-4 py-1 rounded-xl border border-[#000]/15 bg-[#f9f9f9]">
          {event.status}
        </span>
      </div>
    </div>
  );
};

const DayEvents = ({ day, dayEvents, isLastDay }) => {
  return (
    <div className="relative">
      {/* Day heading with timeline bullet */}
      <div className="relative flex items-center mb-2">
        <div className="relative">
          {/* Timeline bullet */}
          <div className="absolute left-0 w-4 h-4 bg-black rounded-full z-10"></div>

          {/* Vertical dashed line */}
          {!isLastDay && (
            <div className="absolute h-[800px]  left-[.4rem] top-4 w-0 border-l-2 border-dashed border-foreground"></div>
          )}
        </div>

        {/* Day label */}
        <h3 className="text-200 font-500 text-black ml-6">{day.person.name}</h3>
      </div>

      {/* Events list with proper left padding for alignment */}
      <div className="space-y-3 ml-6 pl-2">
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

const TechEvents = ({ selectedDate = new Date() }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Filter events based on search query if provided
  const filteredEvents = searchQuery
    ? events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className="flex justify-between items-center">
          <h2 className="text-400 font-600 mb-2">Nearby Events</h2>
          <div className="relative flex items-center">
            {showSearch ? (
              <div className="absolute right-0 top-[-1rem]">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="p-2 border border-border rounded-md bg-card shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={toggleSearch}
                className="p-2 bg-white rounded-full"
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-10 relative pl-2">
        {eventsGroupedByDay.map(({ day, events, isLastDay }) => (
          <DayEvents
            key={day.id}
            day={day}
            dayEvents={events}
            isLastDay={isLastDay}
          />
        ))}

        {filteredEvents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-foreground/60">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEvents;
