import { useState } from "react";
import { Search, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MeetingLink from "../../../components/MeetingLink";
import Image from "../../../components/Image";
import {
  formatDate,
  formatEventTime,
  useUserEvents,
} from "../../../hooks/useUserEvents";
import SkeletonLoader from "../../../components/SkeletonLoader";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user_id);

  const placeholderAttendees = [
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  ];

  // Handle click event
  const handleCardClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`flex cursor-pointer flex-wrap gap-4 rounded-xl bg-white p-4 md:items-start`}
    >
      <Image
        src={event.banner_image || event.image || "/placeholder.svg"}
        alt={event.event_title || event.title}
        width={130}
        height={130}
        background="red"
        className="mb-2 size-[80px] rounded-lg object-cover md:mb-0 md:size-[130px]"
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">
          {event.start_time ? formatEventTime(event.start_time) : event.time}
        </span>
        <h3 className="text-200 font-600 capitalize">
          {event.event_title || event.title}
        </h3>
        {event.event_link && event.event_link !== "null" && (
          <div className="inline-block">
            <MeetingLink url={event.event_link} />
          </div>
        )}

        {event.location && event.location !== "null" && (
          <p className="line-clamp-1 capitalize text-gray-400">
            {event.location}
          </p>
        )}

        <p className="mb-2 text-100 text-foreground">
          {event.language || event.region}
        </p>

        <div>
          <div className="mb-4 flex -space-x-2 md:mb-0">
            {(event.attendees || placeholderAttendees)
              .slice(0, 4)
              .map((attendee, index) => (
                <div
                  key={index}
                  className="size-[30px] overflow-hidden rounded-full border-2 border-card"
                >
                  <img
                    src={attendee || "/placeholder.svg"}
                    alt="Attendee"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {event.status ? (
        <span className="rounded-xl border border-[#000]/15 bg-[#f9f9f9] px-4 py-1 text-50 text-foreground/50">
          {event.status}
        </span>
      ) : (
        String(userId) === String(event.user_id) && (
          <span className="rounded-xl text-50 text-foreground/50">
            <Edit className="size-5 text-foreground" />
          </span>
        )
      )}
    </div>
  );
};

const DayEvents = ({ dateStr, dayEvents, isLastDay }) => {
  return (
    <div className="relative">
      <div className="relative mb-2 flex items-center">
        <div className="relative">
          <div className="absolute -left-2 -top-4 z-10 h-4 w-4 rounded-full bg-black"></div>
        </div>

        {/* Day label */}
        <h3 className="mb-4 ml-6 text-100 font-500 text-black">
          {formatDate(dateStr)}
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
  const token = useSelector((state) => state.auth.token);

  // Use the custom hook to fetch and manage events data
  const { groupedEvents, isLoading, error } = useUserEvents(token);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Filter events if search query is provided
  const filteredGroupedEvents = searchQuery
    ? groupedEvents
        .map(({ date, events }) => ({
          date,
          events: events.filter(
            (event) =>
              (event.event_title &&
                event.event_title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())) ||
              (event.location &&
                event.location
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())),
          ),
        }))
        .filter((group) => group.events.length > 0)
    : groupedEvents;

  if (isLoading) {
    return <SkeletonLoader type="list" count={3} />;
  }

  if (error) {
    return (
      <p className="p-4 text-red-500">
        Failed to load events. Please try again later.
      </p>
    );
  }

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

      {filteredGroupedEvents.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-foreground/60">No events found</p>
        </div>
      ) : (
        <div className="relative space-y-5 pl-2">
          <div className="absolute bottom-0 left-[.4rem] top-0 w-0 border-l-2 border-dashed border-foreground"></div>
          {filteredGroupedEvents.map(({ date, events }, index) => (
            <DayEvents
              key={index}
              dateStr={date}
              dayEvents={events}
              isLastDay={index === filteredGroupedEvents.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechEvents;
