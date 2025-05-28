import BannerOne from "../../../assets/nextgen-event-1.png";
import BannerTwo from "../../../assets/nextgen-event-2.png";
import EventCard from "../components/EventCard";

const eventsData = [
  {
    name: "Season 2 (2025)",
    bannerImg: BannerOne,
    description:
      "Short description about what the event is kinda all about this is it",
    date: "August 15 & 16",
    location: "Online",
  },

  {
    name: "Season 1 (2024)",
    bannerImg: BannerTwo,
    description:
      "Short description about what the event is kinda all about this is it",
    date: "August 15 & 16",
    location: "Online",
  },
];

const Events = () => {
  return (
    <section className="pt-24">
      <div className="container 2xl:max-w-[1200px]">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Event</h2>
        <p className="mb-8 text-gray-600">
          Stay up to date with all the community events. All events, like
          absolutely everything on ODS, AI, have always been and will be free.
        </p>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
