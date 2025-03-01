import { Bell, LogOut, Menu, User } from 'lucide-react';
import Logo from '../../assets/logo.png';
import Avatar from '../../assets/admin-avatar.png';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const AdminHeader = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <nav className="fixed top-0 left-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg p-2 hover:bg-background md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link to="/" className="text-200 font-600">
              <img src={Logo} className="size-7" loading="lazy" alt="Centrl" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-background">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown}>
                <img src={Avatar} className="h-8 w-8 rounded-full" alt="User" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md  bg-white ring-1 ring-[#000]/15 ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <User
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      View Profile
                    </Link>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <LogOut
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* <button>
              <img src={Avatar} className="h-8 w-8 rounded-full" alt="User" />
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
