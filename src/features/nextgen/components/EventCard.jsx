const EventCard = ({ event }) => {
  return (
    <div className="items-center rounded-xl bg-white shadow-md md:grid md:grid-cols-2 md:gap-2">
      <img
        src={event.bannerImg}
        alt={event.name}
        className="h-full w-full object-cover"
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
    </div>
  );
};

export default EventCard;
