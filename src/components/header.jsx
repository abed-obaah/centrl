import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import { useState } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
      <div className="flex items-center justify-between p-4 max-w-[1290px] 2xl:max-w-[1500px] mx-auto">
        {/* Logo */}
        <a href="/">
          <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md-plus:flex md-plus:gap-10 xl:mr-14 2xl:mr-[20rem]">
          <li>
            <Link
              to={'/pricing'}
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              to={'/discover'}
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Discover
            </Link>
          </li>

          <li>
            <Link
              to={'/about'}
              className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              About
            </Link>
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
