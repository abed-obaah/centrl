import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from './header';
import Hero from './heroSection/hero';
import TrendingEvents from "./trending/TrendingEvents";
import FeaturedCalendars from "./trending/FeaturedCalendars";
import NewEvents from "./trending/NewEvents";
import SponsoredEvents from "./footer/banner";
import Footer from './footer/footer';


function Home() {
    return ( 
        <>
        <div className='bg-[#F4F5F7] mb-20'>
                <Header />
                <Hero />
        </div>
               <div className='bg-[#F4F5F7]'>
             
                {/* Trending Events Section */}
                <div className=''>
                     <TrendingEvents />
                </div>
              

                {/* Featured Calendars Section */}
                <div className="mt-10">
                <FeaturedCalendars />
                </div>

                <div className="mt-10">
                <NewEvents />
                </div>

                <div className="mt-10">
                <SponsoredEvents />
                </div>
                <Footer />
               </div>

            
        </>
     );
}

export default Home;
