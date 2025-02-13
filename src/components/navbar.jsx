import SearchBar from './SearchBar';

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
    href: '/',
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
              <a className="" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md-plus:inline-block">
        <div className="">
          <ul className="flex items-center lg:ml-12 lg:mr-auto">
            <SearchBar />
            <a
              href="#"
              className="ml-4 inline-flex items-center justify-center rounded-[13px] border  px-4 py-2  font-500 border-[#000]/15 text-[#000] shadow-xs"
            >
              Sign In
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
