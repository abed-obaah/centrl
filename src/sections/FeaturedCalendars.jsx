import { ArrowRight } from 'iconsax-react';
import { cards } from '../libs/constants';
import { Link } from 'react-router-dom';

const FeaturedCalendars = () => {
  return (
    <section className="bg-gradient-to-r mt-20 py-20 from-[#FF6B98] via-[#B76EFD] to-[#FFD5BA]">
      <div className="container 2xl:max-w-[1200px]">
        <div className="flex justify-between flex-wrap items-center w-full mb-8 ">
          <h2 className="text-400 text-[#fff] md:text-500 font-700">
            Featured Calenders
          </h2>

          <Link
            to="/calendar"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#fff] gap-2 flex items-center"
          >
            <span className="font-700">View More </span>
            <ArrowRight size="20" />
          </Link>
        </div>

        <div className="md:grid md:grid-cols-2 space-y-8 md:space-y-0 md:gap-4 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-[#fff] rounded-2xl  p-6 ">
              <div className="flex items-start justify-between mb-8">
                <div className="relative">
                  <img
                    className="w-14 h-14 object-cover"
                    src={card.imgUrl}
                    alt={card.name}
                  />
                </div>

                <button className="bg-[#C7C7C7]/20 text-50 text-[#000] py-2 px-4 rounded-xl font-600">
                  Subscribe
                </button>
              </div>

              <div>
                <h3 className="text-200 font-600 mb-8">{card.name}</h3>
                <p className=" text-[#B0B0B0] font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCalendars;
