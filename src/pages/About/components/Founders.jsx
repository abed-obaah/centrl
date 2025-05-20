import Akpor from "../../../assets/joel.png";
import Joel from "../../../assets/favour.png";

const founders = [
  {
    name: "Akpor .E. Favour",
    role: "Founder & CEO",
    description: "Bio",
    image: Akpor,
  },
  {
    name: "Joel Banks",
    role: "Co-founder & CPO",
    description: "Bio",
    image: Joel,
  },
];

const Founders = () => {
  return (
    <section>
      <h2 className="mb-8 text-300 font-600 text-[#fff]">Founders</h2>

      {/* Founder Cards Container with Grid Layout */}
      <div className="gap-4 space-y-6 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-4">
        {founders.map((founder, index) => (
          <div key={index}>
            {/* Founder Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full rounded-tl-lg rounded-tr-lg object-cover md:h-[289px]"
            />
            {/* Founder Details */}
            <div className="rounded-bl-3xl rounded-br-3xl bg-[#fff] px-6 pb-8 pt-4">
              <h3 className="mb-2 text-200 font-600">{founder.name}</h3>
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
