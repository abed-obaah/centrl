import { Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEvents } from "../../../api/eventApi";
import { Spinner } from "../../../components/Spinner";
import { format, parseISO } from "date-fns";

const groupEventsByDate = (events) => {
  const grouped = events.reduce((acc, event) => {
    const date = event.start_time.split(" ")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([date, events]) => ({
      date,
      events,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const placeholderAttendees = [
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  ];

  // Handle click event
  const handleCardClick = () => {
    if (event.status === "edit") {
      navigate(`/overview`);
    }
  };

  const formatEventTime = (dateTimeString) => {
    try {
      const date = parseISO(dateTimeString);
      return format(date, "h:mm a");
    } catch (error) {
      return "Time not available";
    }
  };

  // Determine cursor style based on status
  const cursorStyle =
    event.status === "edit" ? "cursor-pointer" : "cursor-default";

  return (
    <div
      onClick={handleCardClick}
      className={`${cursorStyle} rounded-xl bg-white p-4 md:flex md:items-start md:gap-4`}
    >
      <img
        src={event.banner_image}
        alt={event.event_title}
        className="mb-2 size-[80px] rounded-lg object-cover md:mb-0 md:size-[130px]"
      />

      <div className="flex-1">
        <span className="text-50 text-foreground/70">
          {formatEventTime(event.start_time)}
        </span>
        <h3 className="text-200 font-600 capitalize">{event.event_title}</h3>
        <p className="text-100 text-foreground/70">{event.location}</p>
        <p className="mb-2 text-100 text-foreground">{event.language}</p>

        <div>
          <div className="mb-4 flex -space-x-2 md:mb-0">
            {placeholderAttendees.map((attendee, index) => (
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
        {event.status === "edit" ? (
          <Edit className="size-4 text-foreground" />
        ) : (
          event.status
        )}
      </span>
    </div>
  );
};

const DayEvents = ({ day, dateStr, dayEvents, isLastDay }) => {
  const formatDate = (dateStr) => {
    try {
      const date = parseISO(dateStr);
      return format(date, "do, MMM");
    } catch (error) {
      return dateStr;
    }
  };

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
          {formatDate(dateStr)}{" "}
        </h3>
      </div>

      <div className="ml-6 space-y-3 pl-2">
        {dayEvents.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            // isLast={isLastDay && index === dayEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const UserEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents(token);
        setEvents(fetchedEvents.data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (events.length === 0) {
    return <div className="p-4">No upcoming events found.</div>;
  }

  const groupedEvents = groupEventsByDate(events);

  return (
    <div>
      <div className="relative space-y-10 pl-2">
        {groupedEvents.map(({ day, events }, index) => (
          <DayEvents
            key={index}
            day={day}
            dayEvents={events}
            isLastDay={index === groupedEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default UserEvent;
