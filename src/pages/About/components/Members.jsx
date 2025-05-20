import Ukpor from "../../../assets/joy.jpeg";
import Obaah from "../../../assets/abed.png";
import Okokonewomazino from "../../../assets/okokon.jpeg";

const members = [
  {
    name: "Obaah C. Abednego",
    role: "CTO",
    description: "Bio",
    image: Obaah,
  },
  {
    name: "Ukpor A. Joy",
    role: "Co-founder & CPO",
    description: "Bio",
    image: Ukpor,
  },
  {
    name: "Okokonewomazino G. Enobong",
    role: "Co-founder & CPO",
    description: "Bio",
    image: Okokonewomazino,
  },
];

const Members = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-300 font-600 text-[#fff]">Team Members</h2>

      {/* Member Cards Container with Grid Layout */}
      <div className="gap-4 space-y-6 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-4">
        {members.map((member, index) => (
          <div key={index}>
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full rounded-tl-lg rounded-tr-lg object-cover md:h-[289px]"
            />
            {/* Member Details */}
            <div className="rounded-bl-3xl rounded-br-3xl bg-[#fff] px-6 pb-8 pt-4">
              <h3 className="mb-2 truncate text-200 font-600">{member.name}</h3>
              <p className="mb-8">{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
