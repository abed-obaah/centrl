import Akpor from '../assets/joel.png';
import Joel from '../assets/favour.png';

const founders = [
  {
    name: 'Akpor .E. Favour',
    role: 'Founder & CEO',
    description: 'Bio',
    image: Akpor,
  },
  {
    name: 'Joel Banks',
    role: 'Co-founder & CPO',
    description: 'Bio',
    image: Joel,
  },
];

const Founders = () => {
  return (
    <section>
      <h2 className="text-300 font-600 text-[#fff] mb-8">Founders</h2>

      {/* Founder Cards Container with Grid Layout */}
      <div className="md:grid space-y-6 md:space-y-0 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {founders.map((founder, index) => (
          <div key={index}>
            {/* Founder Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full object-cover md:h-[289px] rounded-tr-lg rounded-tl-lg"
            />
            {/* Founder Details */}
            <div className="bg-[#fff] px-6 pt-4 pb-8 rounded-br-3xl rounded-bl-3xl">
              <h3 className="font-600 text-200 mb-2">{founder.name}</h3>
              <p className="mb-8">{founder.role}</p>
              <p>{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
