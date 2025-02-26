import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '../../assets/dashboard-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import MoreIcon from '../../assets/more-icon.svg';

const AdminNavbar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={`absolute bg-white md:bg-[transparent] pt-12 md:pt-0 md:mt-24 left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-6 z-20 flex items-center justify-between md:hidden">
          <button
            className="rounded-lg p-2 hover:bg-background"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6 absolute right-4" />
          </button>
        </div>
        <ul className="space-y-2">
          {[
            {
              name: 'Dashboard',
              icon: DashboardIcon,
              href: '/admin-dashboard',
            },
            { name: 'Users', icon: UserIcon, href: '/admin-users' },
            {
              name: 'Events management',
              icon: UserIcon,
              href: '/admin-event-management',
            },
            { name: 'Revenue & Payments', icon: UserIcon, href: '/revenue' },
            { name: 'Admins', icon: UserIcon, href: '/admins' },
            { name: 'Themes', icon: UserIcon, href: '/themes' },
            { name: 'More', icon: MoreIcon, href: '/more' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-100 font-500 ${
                  currentPath === item.href
                    ? 'bg-white text-black font-600'
                    : 'hover:bg-white hover:text-black'
                }`}
              >
                <img src={item.icon} alt={item.name} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AdminNavbar;
