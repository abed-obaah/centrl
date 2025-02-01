import { useState } from "react";
// import { Search } from "lucide-react";
import { SearchNormal1 } from "iconsax-react";


export default function SearchBar() {
  const [location, setLocation] = useState("Lagos");

  return (
    <div className="flex items-center gap-2 bg-white p-0 rounded-full border">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search events...."
        className="px-4 py-2 rounded-full focus:outline-none w-64 "
      />

      {/* Location Dropdown */}
      <select
        className="px-3 py-2  focus:outline-none cursor-pointer"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Port Harcourt">Port Harcourt</option>
      </select>

      {/* Search Icon */}
      <button className="bg-orange-500 text-white p-2 mr-1 rounded-full ml-4">
        <SearchNormal1
            size="18"
            color="#FFF"
            />
      </button>

      {/* Sign In Button */}
     
    </div>
  );
}
