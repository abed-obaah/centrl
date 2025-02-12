import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Events from './events';
import Category from './category';
import Celeb from './featureCeleb';

function Home() {
  return (
    <>
      <div className="max-w-7xl ml-auto mr-auto pl-36 text-left p-6">
        <h2 className="text-2xl font-bold mb-4">Discover Events</h2>
        <p className="text-gray-600">
          Explore popular events near you, browse by category, or check out some
          of the great community calendars.
        </p>
      </div>
      <div className="]">
        <div className="max-w-7xl ml-auto mr-auto pl-36 text-left p-6">
          <h2 className="text-lg font-normal mb-4">Explore Local Events</h2>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-1 text-sm font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
            Africa
          </span>
          {/* <!-- Grid of Cards --> */}
          <Events />

          <Category />
          <Celeb />
        </div>
      </div>
    </>
  );
}

export default Home;
