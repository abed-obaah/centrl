import Banner from '../sections/Banner';
import FeaturedCalendars from '../sections/FeaturedCalendars';
import Hero from '../sections/Hero';
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
