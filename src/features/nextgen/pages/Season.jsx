import SeasonImg from "../../../assets/season-img.png";
import SeasonBanner from "../../../assets/season-banner.png";
import Speakers from "../sections/Speakers";

const Season = () => {
  const keyThemes = [
    "AI",
    "Career Development",
    "Networking",
    "DevOps",
    "UX",
    "Data Analytics",
    "Machine Learning",
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="container lg:max-w-[1000px] 2xl:max-w-[1000px]">
        <div className="mb-6">
          <div className="md:flex md:gap-10">
            <div>
              <img
                className="w-full object-cover md:w-fit"
                src={SeasonImg}
                alt="season"
              />
            </div>

            <div className="mt-4">
              <p className="text-black">Maiden Edition</p>
              <h1 className="mb-3 text-500 font-700 md:text-600">
                Breaking into Tech
              </h1>
              <p className="mb-3 font-500">This event was conducted online</p>
              <button className="rounded-full bg-[#FFABAB] px-6 py-3 text-white">
                Event has been concluded
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="container bg-[#F2F1F6] py-8 lg:max-w-[1000px] 2xl:max-w-[1000px]">
        <div className="">
          <p className="text-lg text-black">
            <span className="font-medium">
              Aug 16 - 17, 2024, 10:00 AM - 2:00 PM (GMT+1)
            </span>
            <span className="ml-4">121 RSVP'd</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container lg:max-w-[1000px] 2xl:max-w-[1000px]">
        <div className="grid gap-12 pt-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-2xl font-bold text-black">Key Themes</h2>
            <div className="flex flex-wrap gap-3">
              {keyThemes.map((theme, index) => (
                <span
                  key={index}
                  className="rounded-xl border-[1.5px] border-black bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - About Event */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-black">
              About this event
            </h2>
            <div className="space-y-4 text-50 leading-relaxed text-gray-600">
              <p>
                The NextGen Tech Forum 2024 was a groundbreaking virtual event
                designed to equip the next generation of tech-driven minds with
                the knowledge, tools, and connections needed to thrive in
                today's digital world. Held online, the forum brought together
                aspiring innovators, tech enthusiasts, students, professionals,
                and startup founders from across Nigeria and beyond for two days
                of immersive learning and thought-provoking conversations.
              </p>
              <p>
                Through a dynamic mix of keynote sessions, panel discussions,
                breakout rooms, and live Q&As, participants explored emerging
                trends in technology—from artificial intelligence and software
                development to blockchain, product design, and the future of
                work.
              </p>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <Speakers />

        {/* Event Flyer */}
        <section className="mt-[10rem]">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <img src={SeasonBanner} alt="Season Banner" />
            </div>

            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Season;
