import { ArrowUpRight } from "lucide-react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Discover",
    href: "/discover",
  },

  {
    name: "About",
    href: "/about",
  },

  {
    name: "Sign In",
    href: "sign-up",
  },
];

const Navbar = ({ isClicked, toggleNavClick }) => {
  return (
    <>
      {/* Mobile nav */}
      <nav
        className={`${
          isClicked ? "translate-x-0" : "translate-x-[190rem]"
        } fixed left-0 top-0 flex h-screen w-full items-center justify-end transition-transform duration-300 md:hidden`}
      >
        <ul className="h-full w-full bg-[#fff] pl-4 pt-[9rem]">
          {navigation.map((item) => (
            <li className="mb-4 text-300 font-500 capitalize" key={item.name}>
              <Link
                to={item.href}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  toggleNavClick();
                }}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md-plus:inline-block">
        <div>
          <ul className="flex items-center gap-8 lg:ml-12 lg:mr-auto">
            <SearchBar />

            <div className="flex items-center">
              <Link
                className="flex items-center gap-2 text-50 font-500 text-foreground duration-300 ease-in hover:text-black"
                to={"/details"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span>Explore Events</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                className="shadow-xs ml-4 inline-flex items-center justify-center rounded-[13px] bg-gray-200 px-4 py-2 text-50 font-500 text-foreground duration-300 ease-in hover:bg-black hover:text-white"
                to={"/sign-up"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Sign In
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
