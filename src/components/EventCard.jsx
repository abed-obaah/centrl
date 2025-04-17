import { Link } from 'react-router-dom';

const EventCard = ({ title, category, date, location, ticket_price_basic, image }) => {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'party':
        return 'bg-[#0C6724] text-white';
      case 'concert':
        return 'bg-[#67380C] text-white';
      case 'business':
        return 'bg-[#0C4367] text-white';
      default:
        return 'bg-[#380C67] text-white';
    }
  };

  // Set default ticket price if not available
  const ticketPrice = ticket_price_basic || "Free";

  return (
    <div className="bg-card rounded-lg w-full mb-6">
      <Link className="inline-block" to="/details"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img
          src={image}
          alt={title}
          className="w-full rounded-tr-lg rounded-tl-lg  h-3/4 object-cover"
        />
      </Link>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-start">
          <button
            className={`text-[#fff] text-50 mb-3 font-500 px-4 py-1 rounded-xl ${
              getCategoryColor(category) || 'bg-[black]'
            }`}
          >
            {category}
          </button>
        </div>
        <h3 className="text-300 font-500">{title}</h3>
        <div className="mb-2">
          <p className="text-[#000]/50 text-100">{date}</p>
          <p className="text-[#000]/50 text-100">{location}</p>
        </div>
        <p className="text-300 font-600 text-black">
          {ticketPrice !== "Free" && !isNaN(Number(ticketPrice)) && Number(ticketPrice) > 0
            ? Number(ticketPrice).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0,
              })
            : "Free"}
        </p>
      </div>
    </div>
  );
};

export default EventCard;

