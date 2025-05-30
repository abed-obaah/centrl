import CeoImg from "../../../assets/joel.png";

const Speakers = () => {
  const speakers = [
    {
      name: "Omolara Ajagbusi",
      title: "Event Moderator",
      image: CeoImg,
    },
    {
      name: "Malcom Ovwighose",
      title: "Product Design, UX",
      image: CeoImg,
    },
    {
      name: "Triumphant Babalola",
      title: "AI / Machine Learning Specialist",
      image: CeoImg,
    },
    {
      name: "Churchill Anigbobi",
      title: "Data Analyst / Machine Learning Expert",
      image: CeoImg,
    },
    {
      name: "Mayowa Ibitola",
      title: "DevOps Engineer",
      image: CeoImg,
    },
    {
      name: "Eromosele Akhigbe",
      title: "Software / DevOps Engineer",
      image: CeoImg,
    },
  ];

  return (
    <section className="pt-24">
      <div className="container lg:max-w-[1000px]">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-left">
          Speakers
        </h2>

        <div className="space-y-6 md:grid md:grid-cols-2 md:items-start md:gap-8 md:space-y-0 lg:-translate-x-6 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                width={150}
                height={150}
                className="mx-auto mb-4 size-[150px] rounded-full object-cover"
              />
              <h3 className="font-bold text-gray-900">{speaker.name}</h3>
              <p className="mb-2 text-sm text-gray-600">{speaker.title}</p>
              <button className="text-sm text-blue-600 hover:underline">
                View profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
