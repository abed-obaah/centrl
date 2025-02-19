import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/Logo.png';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
      <div className="flex items-center justify-between py-4 max-w-[1290px] 2xl:max-w-[1500px] mx-auto px-4">
        {/* Logo */}
        <a href="/">
          <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md-plus:flex md-plus:gap-10 xl:mr-14 2xl:mr-[20rem]">
          <li>
            <a
              href="/pricing"
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="/discover"
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
            >
              Discover
            </a>
          </li>

          <li>
            <a
              href="about"
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
            >
              About
            </a>
          </li>
        </ul>

        {/* Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

        {/* Menu Icons */}
        <div
          className="z-10 inline-block md-plus:hidden"
          onClick={toggleNavClick}
        >
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
};

export default Header;
