import { Edit } from "lucide-react";
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
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`flex cursor-pointer flex-wrap gap-4 rounded-xl bg-white p-4 md:items-start`}
    >
      <Image
        src={event.banner_image || "/placeholder.svg"}
        alt={event.event_title}
        width={130}
        height={130}
        background="red"
        className="mb-2 size-[80px] rounded-lg object-cover md:mb-0 md:size-[130px]"
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">
          {formatEventTime(event.start_time)}
        </span>
        <h3 className="text-200 font-600 capitalize">{event.event_title}</h3>
        {event.event_link !== "null" && (
          <div className="inline-block">
            <MeetingLink url={event.event_link} />
          </div>
        )}

        {event.location !== "null" && (
          <p className="line-clamp-1 capitalize text-gray-400">
            {event.location}
          </p>
        )}

        <p className="mb-2 text-100 text-foreground">{event.language}</p>

        <div>
          <div className="mb-4 flex -space-x-2 md:mb-0">
            {placeholderAttendees.map((attendee, index) => (
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

      {String(userId) === String(event.user_id) && (
        <a
          href={`/overview/${event.id}`}
          className="rounded-xl text-50 text-foreground/50"
        >
          <Edit className="size-5 text-foreground" />
        </a>
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
        <h3 className="mb-4 ml-4 text-100 font-500 text-black md:ml-6">
          {formatDate(dateStr)}{" "}
        </h3>
      </div>

      <div className="space-y-3 pl-2 md:ml-6">
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

const UserEvent = () => {
  const token = useSelector((state) => state.auth.token);

  // Use the custom hook to fetch and manage events data
  const { groupedEvents, isLoading, error } = useUserEvents(token);

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

  if (groupedEvents.length === 0) {
    return <div className="p-4">No upcoming events found.</div>;
  }

  return (
    <div>
      <div className="relative space-y-5 pl-2">
        <div className="absolute bottom-0 left-[.4rem] top-0 w-0 border-l-2 border-dashed border-foreground"></div>
        {groupedEvents.map(({ date, events }, index) => (
          <DayEvents
            key={index}
            dateStr={date}
            dayEvents={events}
            isLastDay={index === groupedEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default UserEvent;
