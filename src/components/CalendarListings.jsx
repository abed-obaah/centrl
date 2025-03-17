import { Link } from "react-router-dom";
import { cards } from "../libs/constants";

const CalendarListings = ({ title }) => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-300 font-600 text-[#000]">{title}</h2>
      </div>

      <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-4 lg:gap-6">
        {cards.map((card) => (
          <div key={card.id} className="rounded-2xl bg-[#fff] p-6">
            <div className="mb-8 flex items-start justify-between">
              <div className="relative">
                <img
                  className="h-14 w-14 object-cover"
                  src={card.imgUrl}
                  alt={card.name}
                />
              </div>

              <Link
                to={`/user-profile/${card.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="rounded-xl bg-[#C7C7C7]/20 px-4 py-2 text-50 font-600 text-[#000] transition-colors duration-300 ease-out hover:bg-subColorBtn hover:text-white">
                  Subscribe
                </button>
              </Link>
            </div>

            <div>
              <h3 className="mb-8 text-200 font-600">{card.name}</h3>
              <p className="font-normal text-[#B0B0B0]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarListings;
