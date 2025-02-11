import React from 'react';
import Header from './header';
import Hero from './heroSection/hero';
import TrendingEvents from './trending/TrendingEvents';
import FeaturedCalendars from './trending/FeaturedCalendars';
import SponsoredEvents from './footer/banner';
import Footer from './footer/footer';
import NewEvents from './trending/NewEvents';

const Home = () => {
  return (
    <>
      <div className="bg-[#F4F5F7] mb-20">
        <Header />
        <Hero />
      </div>

      <div className="bg-[#F4F5F7]">
        {/* Trending Events Section */}
        <TrendingEvents />

        {/* Featured Calendars Section */}
        <div className="mt-10">
          <FeaturedCalendars />
        </div>

        <NewEvents />

        <div className="mt-10">
          <SponsoredEvents />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
