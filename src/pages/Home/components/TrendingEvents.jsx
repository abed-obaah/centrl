import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "iconsax-react";
import { useSelector } from "react-redux";
import { getEvents } from "../../../api/eventApi";

// Skeleton Loading Component
const EventCardSkeleton = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[300px] animate-pulse flex-col rounded-lg bg-card">
      <div className="h-[200px] w-full rounded-t-lg bg-gray-200"></div>
      <div className="flex h-full flex-grow flex-col justify-between p-4">
        <div>
          <div className="flex justify-start">
            <div className="mb-3 h-6 w-20 rounded-xl bg-gray-200 px-4 py-1 text-50 font-500"></div>
          </div>
          <div className="mb-3 h-5 w-3/4 rounded bg-gray-200"></div>
          <div className="mb-2 space-y-2">
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="h-5 w-1/3 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

const categoryColors = {
  Party: "bg-[#0C6724]",
  Concert: "bg-[#67380C]",
  Business: "bg-[#0C4367]",
  Technology: "bg-[#380C67]",
};

const TrendingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents(token);
        console.log("events raw response:", response);

        if (
          response &&
          response.status === "success" &&
          Array.isArray(response.data)
        ) {
          const formattedEvents = response.data
            .map((event) => ({
              id: event.id,
              title: event.event_title,
              date: formatDate(event.start_time),
              location: event.location || "Location not specified",
              category: event.event_category || "General",
              image: event.banner_image,
              ticket_price_basic: event.ticket_price_diamond || "FREE",
            }))
            .sort((a, b) => {
              if (a.category === "Technology" && b.category !== "Technology")
                return -1;
              if (a.category !== "Technology" && b.category === "Technology")
                return 1;
              return 0;
            });

          formattedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));

          setEvents(formattedEvents);
        } else {
          console.warn("Unexpected event data format");
          setEvents([]);
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

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
          <h2 className="text-400 font-700 md:text-500">Trending Events</h2>

          <Link
            to="/details"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-black"
          >
            <span className="font-700">View More</span>
            <ArrowRight size="20" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            // Show 4 skeleton cards while loading
            <>
              <EventCardSkeleton />
              <EventCardSkeleton />
              <EventCardSkeleton />
              <EventCardSkeleton />
            </>
          ) : (
            events.slice(0, 4).map((event, index) => (
              <div
                key={event.id || index}
                className="mx-auto flex h-full w-full max-w-[300px] flex-col rounded-lg bg-card"
              >
                <Link
                  className="inline-block"
                  to="/details"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <img
                    src={event?.image}
                    alt={event?.title}
                    className="h-[200px] w-full rounded-t-lg object-cover"
                  />
                </Link>

                <div className="flex h-full flex-grow flex-col justify-between p-4">
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
                    <h3 className="truncate text-300 font-500">
                      {event.title}
                    </h3>
                    <div className="mb-2">
                      <p className="text-100 text-black/50">{event.date}</p>
                      <p className="max-w-full truncate text-100 text-black/50">
                        {event.location && event.location !== "null"
                          ? event.location
                          : "Location not specified"}
                      </p>
                    </div>
                  </div>
                  <p className="text-300 font-600 text-black">
                    {event.ticket_price_basic != null &&
                    !isNaN(Number(event.ticket_price_basic)) &&
                    Number(event.ticket_price_basic) > 0
                      ? Number(event.ticket_price_basic).toLocaleString(
                          "en-NG",
                          {
                            style: "currency",
                            currency: "NGN",
                            maximumFractionDigits: 0,
                          },
                        )
                      : "Free"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;
