import { AlignLeft, X } from "lucide-react";
import { useState } from "react";
import NextgenLogo from "../../../assets/nextgen.svg";
import CentrlLogo from "../../../assets/nextgen-centrl.svg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="via-neutral-100/50 supports-[backdrop-filter]:bg-white/3 fixed top-0 z-[500] w-full bg-gradient-to-r from-white/50 to-white/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1290px] items-center justify-between p-4 2xl:max-w-[1500px]">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <a className="flex items-center" href="/">
              <img
                alt="Next Gen"
                src={NextgenLogo}
                className="size-7"
                loading="lazy"
              />
              <img
                alt="Centrl"
                src={CentrlLogo}
                className="size-7 -translate-x-2"
                loading="lazy"
              />
            </a>
          </div>

          <ul className="hidden md-plus:flex md-plus:gap-10 xl:ml-[1rem] 2xl:ml-[6rem]">
            <li>
              <NavLink
                to={"/pricing"}
                className="text-50 font-500 text-foreground transition-colors duration-300 ease-out hover:text-black active:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Tools & Resources
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"neumind"}
                className={({ isActive }) =>
                  `text-50 font-500 transition-colors duration-300 ease-out hover:text-black ${
                    isActive ? "font-600 text-black" : "text-foreground"
                  }`
                }
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Neumind
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar */}
        <Navbar
          isClicked={isMobileMenuOpen}
          toggleNavClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-10 inline-block md-plus:hidden"
        >
          <span className="sr-only">Open main menu</span>
          {!isMobileMenuOpen ? (
            <div>
              <span className="sr-only">Open menu</span>
              <AlignLeft aria-hidden="true" className="size-6" />
            </div>
          ) : (
            <div>
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
