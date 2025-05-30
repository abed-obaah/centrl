const EventCard = ({ event }) => {
  return (
    <a
      href="/nextgen/season-1"
      className="items-center rounded-xl bg-white shadow-md md:grid md:grid-cols-[1.5fr_2fr] md:gap-2"
    >
      <img
        src={event.bannerImg}
        alt={event.name}
        loading="lazy"
        className="h-full w-full rounded-bl-xl rounded-tl-xl object-cover md:w-[227px]"
      />

      <div className="flex h-full flex-col justify-between px-3 py-6">
        <div className="">
          <p className="font-600 text-black">Date:{event.date}</p>
          <p className="text-100 font-700 text-black">{event.location}</p>
        </div>

        <div className="">
          <h3 className="mb-2 text-xl font-semibold text-black">
            {event.name}
          </h3>
          <p className="text-50 text-gray-600">{event.description}</p>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
