import { Bell, Menu } from 'lucide-react';
import Logo from '../../assets/logo.png';
import Avatar from '../../assets/admin-avatar.png';
import { Link } from 'react-router-dom';

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full">
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
            <button className="hover:bg-background">
              <img src={Avatar} className="h-8 w-8 rounded-full" alt="User" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
