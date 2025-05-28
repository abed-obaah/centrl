import { Link, NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Tools & Resources",
    href: "/",
  },

  {
    name: "Neumind",
    href: "/",
  },
  {
    name: "Register with Centrl",
    href: "/",
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
              <NavLink
                to={item.href}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  toggleNavClick();
                }}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md-plus:inline-block">
        <div className="flex items-center">
          <Link
            className="shadow-xs border-bg-gray-200 ml-4 inline-flex items-center justify-center rounded-2xl border-[1.5px] px-4 py-2 text-50 font-500 text-foreground duration-300 ease-in hover:bg-black hover:text-white"
            to={"/sign-up"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Register with Centrl
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
