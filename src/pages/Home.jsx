import Banner from '../sections/banner';
import FeaturedCalendars from '../sections/FeaturedCalendars';
import Hero from '../sections/hero';
import NewEvents from '../sections/NewEvents';
import TrendingEvents from '../sections/TrendingEvents';

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Trending events section */}
      <TrendingEvents />

      {/* Featured Calendars section */}
      <FeaturedCalendars />

      {/* New events section */}
      <NewEvents />

      {/* Banner section */}
      <Banner />
    </>
  );
};

export default Home;
