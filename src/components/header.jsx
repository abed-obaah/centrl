import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/Logo.png';
import { useState } from 'react';
import Navbar from './Navbar';

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
      <div className="flex items-center justify-between py-5 max-w-[1200px] mx-auto px-4">
        {/* Logo */}
        <a href="#">
          <img alt="Centrl" src={logo} className="size-8" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex lg:gap-10">
          <li>
            <a
              href="/pricing"
              className="text-base font-medium text-[#000000CC] hover:text-gray-900"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="/discover"
              className="text-base font-medium text-[#000000CC] hover:text-gray-900"
            >
              Discover
            </a>
          </li>

          <li>
            <a
              href="about"
              className="text-base font-medium text-[#000000CC] hover:text-gray-900"
            >
              About
            </a>
          </li>
        </ul>

        {/* Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

        {/* Menu Icons */}
        <div className="z-10 inline-block lg:hidden" onClick={toggleNavClick}>
          {isClicked ? (
            <button>
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          ) : (
            <button>
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
