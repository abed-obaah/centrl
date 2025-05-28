import SponsorsBanner from "../../../pages/About/components/SponsorsBanner";
import About from "../sections/About";
import Events from "../sections/Events";
import Hero from "../sections/Hero";
import Organizers from "../sections/Organizers";
import Podcast from "../sections/Podcast";

const NextGenHome = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Events */}
      <Events />

      {/* About */}
      <About />

      {/* Podcast */}
      <Podcast />

      {/* Organizers */}
      <Organizers />

      <div className="container pt-24 2xl:max-w-[1200px]">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Partners</h2>
        <SponsorsBanner />
      </div>
    </div>
  );
};

export default NextGenHome;
