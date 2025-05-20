import Banner from "./components/Banner";
import FeaturedCalendars from "./components/FeaturedCalenders";
import Hero from "./components/Hero";
import NewEvents from "./components/NewEvents";
import TrendingEvents from "./components/TrendingEvents";

const HomePage = () => {
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

export default HomePage;
