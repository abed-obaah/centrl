import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../../assets/dashboard-icon.svg";
import UserIcon from "../../assets/user-icon.svg";
import MoreIcon from "../../assets/more-icon.svg";

const CustomNavbar = ({ isOpen, toggleSidebar, eventId }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={`absolute left-0 top-0 z-40 h-screen w-64 transform bg-white pt-12 transition-transform duration-300 ease-in-out md:mt-24 md:bg-[transparent] md:pt-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex h-full flex-col px-3 py-4">
        <div className="z-20 mb-6 flex items-center justify-between md:hidden">
          <button
            className="rounded-lg p-2 hover:bg-background"
            onClick={toggleSidebar}
          >
            <X className="absolute right-4 h-6 w-6" />
          </button>
        </div>
        <ul className="space-y-2">
          {[
            {
              name: "Overview",
              icon: DashboardIcon,
              href: `/overview/${eventId}`,
            },
            {
              name: "Customize",
              icon: UserIcon,
              href: `/customize-event/${eventId}`,
            },
            {
              name: "Registrations",
              icon: UserIcon,
              href: "/registrations",
            },
            { name: "Guests", icon: UserIcon, href: "/guests" },
            { name: "Messages", icon: UserIcon, href: "/messages" },
            { name: "Insights", icon: UserIcon, href: "/insights" },
            { name: "More", icon: MoreIcon, href: "/more" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-50 font-500 ${
                  currentPath === item.href
                    ? "bg-white font-600 text-black"
                    : "hover:bg-white hover:text-black"
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

export default CustomNavbar;
