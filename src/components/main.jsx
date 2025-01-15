import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from './header';
import Hero from './heroSection/hero';
import TrendingEvents from "./trending/TrendingEvents";
import FeaturedCalendars from "./trending/FeaturedCalendars";
import NewEvents from "./trending/NewEvents";
import SponsoredEvents from "./trending/SponsoredEvents";
import Footer from './footer/footer';


function Home() {
    return ( 
        <>
        <div className=''>
                <Header />
                <Hero />
        </div>
               <div className='bg-[#F9F9F9]'>
               <header className="flex justify-end items-center mb-8">
                   
                    <div className="flex flex-col items-center space-y-2">
                        {/* Profile Image */}
                        <div className="relative">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover border border-gray-300"
                        />
                        {/* Ellipsis Icon */}
                        <button className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v.01M12 12v.01M12 18v.01"
                            />
                            </svg>
                        </button>
                        </div>

                    </div>
             </header>
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
