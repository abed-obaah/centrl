import Ukpor from '../assets/joy.jpeg';
import Obaah from '../assets/abed.png';
import Okokonewomazino from '../assets/okokon.jpeg';

const members = [
  {
    name: 'Obaah C. Abednego',
    role: 'CTO',
    description: 'Bio',
    image: Obaah,
  },
  {
    name: 'Ukpor A. Joy',
    role: 'Co-founder & CPO',
    description: 'Bio',
    image: Ukpor,
  },
  {
    name: 'Okokonewomazino G. Enobong',
    role: 'Co-founder & CPO',
    description: 'Bio',
    image: Okokonewomazino,
  },
];

const Members = () => {
  return (
    <section className="mt-16">
      <h2 className="text-300 font-600 text-[#fff] mb-8">Team Members</h2>

      {/* Member Cards Container with Grid Layout */}
      <div className="md:grid space-y-6 md:space-y-0 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {members.map((member, index) => (
          <div key={index}>
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full md:h-[289px] object-cover rounded-tr-lg rounded-tl-lg"
            />
            {/* Member Details */}
            <div className="bg-[#fff] px-6 pt-4 pb-8 rounded-br-3xl rounded-bl-3xl">
              <h3 className="font-600 text-200 mb-2 truncate">{member.name}</h3>
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
