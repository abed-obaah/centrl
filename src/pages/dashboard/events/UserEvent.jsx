import { Edit } from "lucide-react";
import boluvard from "../../../assets/boluvard.png";
import love from "../../../assets/love.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEvents } from "../../../api/eventApi";

const activity = [
  {
    id: 1,
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
  },
];

const events = [
  {
    id: 1,
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
    status: "edit",
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
  const navigate = useNavigate();

  // Handle click event
  const handleCardClick = () => {
    if (event.status === "edit") {
      navigate(`/overview`);
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
        {event.status === "edit" ? (
          <Edit className="size-4 text-foreground" />
        ) : (
          event.status
        )}
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

  console.log("Events:", events);

  return (
    <div>
      <div className="relative space-y-10 pl-2">
        {events.map((event) => (
          <div key={event.id}>
            <p>{event.event_title}</p>
            <img src={event.banner_image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEvent;
