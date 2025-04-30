import { Link } from 'react-router-dom';

const navigation = [
  {
    name: 'Event',
    href: '/',
  },

  {
    name: 'Discover',
    href: '/discover',
  },
];

const EventNavbar = ({ isClicked }) => {
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
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default EventNavbar;
