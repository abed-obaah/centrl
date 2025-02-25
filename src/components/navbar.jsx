import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const navigation = [
  {
    name: 'Home',
    href: '/',
  },

  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Discover',
    href: '/discover',
  },

  {
    name: 'Calendars',
    href: '/calendar',
  },

  {
    name: 'Sign In',
    href: 'sign-in',
  },
];

const Navbar = ({ isClicked }) => {
  return (
    <>
      {/* Mobile nav */}
      <nav
        className={`${
          isClicked ? 'translate-x-0' : 'translate-x-[190rem]'
        } fixed left-0 top-0 flex h-screen w-full items-center justify-end transition-transform duration-300 md:hidden`}
      >
        <ul className="h-full w-full bg-[#fff] pl-4 pt-[9rem]">
          {navigation.map((item) => (
            <li className="mb-4 text-300 font-500 capitalize" key={item.name}>
              <Link
                to={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <a className="" href="#">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md-plus:inline-block">
        <div>
          <ul className="flex items-center lg:ml-12 lg:mr-auto">
            <SearchBar />
            <Link
              className="ml-4 text-50 inline-flex items-center justify-center rounded-[13px] border  px-4 py-2  font-500 border-[#000]/15 text-foreground hover:text-white hover:bg-black duration-300 ease-in shadow-xs"
              to={'/sign-in'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Sign In
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
