import { ArrowRight } from "iconsax-react";
import { cards } from "../libs/constants";
import { Link } from "react-router-dom";
import Image from "../components/Image";

const FeaturedCalendars = () => {
  return (
    <section className="mt-20 bg-gradient-to-r from-[#FF6B98] via-[#B76EFD] to-[#FFD5BA] py-20">
      <div className="container 2xl:max-w-[1200px]">
        <div className="mb-8 flex w-full flex-wrap items-center justify-between">
          <h2 className="text-400 font-700 text-[#fff] md:text-500">
            Featured Calenders
          </h2>

          <Link
            to="/calendar"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[#fff]"
          >
            <span className="font-700">View More </span>
            <ArrowRight size="20" />
          </Link>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="rounded-2xl bg-[#fff] p-6">
              <div className="mb-8 flex items-start justify-between">
                <div className="relative">
                  <Image
                    className="h-14 w-14 object-cover"
                    src={card.imgUrl}
                    alt={card.name}
                  />
                </div>

                <button className="rounded-xl bg-[#C7C7C7]/20 px-4 py-2 text-50 font-600 text-[#000] transition-colors duration-300 ease-out hover:bg-subColorBtn hover:text-white">
                  Subscribe
                </button>
              </div>

              <div>
                <h3 className="mb-8 text-200 font-600">{card.name}</h3>
                <p className="font-normal text-[#B0B0B0]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCalendars;
