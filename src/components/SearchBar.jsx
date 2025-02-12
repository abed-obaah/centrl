import { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const [location, setLocation] = useState('Lagos');

  return (
    <div className="flex items-center gap-2   p-0 rounded-full border-[1.5px] shadow-md border-[#000]/15">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search events...."
        className="px-4 py-[0.55rem] bg-[transparent]  rounded-full placeholder:text-[#646060] focus:outline-none w-64 "
      />

      {/* Location Dropdown */}
      <div className="relative">
        <select
          className="appearance-none bg-[transparent] w-[90px] px-3 py-2 pr-6 focus:outline-none cursor-pointer"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
        </select>
        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
      </div>

      {/* Search Icon */}
      <button className="bg-[#FF6F02] text-white p-2 mr-1 rounded-full ml-4">
        <SearchNormal1 size="18" color="#FFF" />
      </button>

      {/* Sign In Button */}
    </div>
  );
}
