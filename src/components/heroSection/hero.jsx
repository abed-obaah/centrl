import React from 'react'
import Stars from '../../assets/stars.png';
import Future from '../../assets/future.png';
import Share from '../../assets/share.png';
import { Button, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import homeimg from '../../assets/homeimg.png'

function Hero() {
    return (
        <main>
                <div>
                {/* Hero card */}
                <div className="relative ">
                    <div className="absolute inset-x-0 bottom-0 h-1/2" />
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-1  py-2">
                    <div className="relative shadow-sm sm:overflow-hidden sm:rounded-2xl bg-[#FFFFFF] mt-10">
                        
                    <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 px-20">
                    <div className="mx-auto max-w-md px-8 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                        <h1 className="text-4xl text-black sm:text-6xl lg:mt-6 xl:text-6xl">
                            <span className="block text-left font-[600]">Events Worth </span>
                            <span className="block text-left font-[600]">Your Time With </span>
                            <span className="block text-[#000] text-left font-bold">CENTRL</span>
                        </h1>
                        <p className="mt-3 text-base w-88 text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Always by your side, ready to support you <br/>whenever and wherever you need it.
                        </p>
                        <div className="mt-4">
                        <button
                            type="submit"
                            className="block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-12 py-3 font-medium text-white shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                            >
                            Create Event
                        </button>

                        </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-12 -mb-16 sm:-mb-48 lg:m-0 h-[400px]">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                        <img
                        alt=""
                        src={homeimg}
                        className="w-2/4 md:w-1/2 lg:w-[100%] lg:max-w-[90%] mx-auto mt-56"
                        />
                    </div>
                    </div>

                    </div>
                </div>
                    </div>
                    </div>
                </div>
                </div>
      </main>
    );
}

export default Hero;
