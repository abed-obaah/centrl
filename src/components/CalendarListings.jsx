import { cards } from '../libs/constants';

const CalendarListings = ({ title }) => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-300 text-[#000]  font-600">{title}</h2>
      </div>

      <div className="md:grid md:grid-cols-2 space-y-8 md:space-y-0 md:gap-4 lg:grid-cols-4 lg:gap-6">
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

<<<<<<< HEAD
              <button className="bg-[#C7C7C7]/20 text-50 text-[#000] py-2 px-4 rounded-xl font-600">
=======
              <button className="bg-[#C7C7C7]/20 text-[#000] py-2 px-4 rounded-xl font-600">
>>>>>>> 2871763a48327e9974a6e53444de677654e98d6c
                Subscribe
              </button>
            </div>

            <div>
              <h3 className="text-200 font-600 mb-8">{card.name}</h3>
              <p className=" text-[#B0B0B0] font-normal">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarListings;
