import { Bell, Menu } from 'lucide-react';
import Logo from '../../assets/logo.png';
import Avatar from '../../assets/admin-avatar.png';
import { Link } from 'react-router-dom';

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <div>
      <nav className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
        <div className="flex items-center justify-between  p-4">
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg p-2 hover:bg-background md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link to="/" className="text-200 font-600">
              <img src={Logo} className="size-7" loading="lazy" alt="Centrl" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-background">
              <Bell className="h-5 w-5" />
            </button>
            <button>
              <img src={Avatar} className="h-8 w-8 rounded-full" alt="User" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
