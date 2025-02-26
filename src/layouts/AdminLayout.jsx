import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import AdminNavbar from '../components/admin/AdminNavbar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
      <AdminHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="fixed left-0 top-0 w-full z-40">
        <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
          <AdminNavbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>

      <main
        className={`transition-margin duration-300 ease-in-out ${
          sidebarOpen ? 'md:ml-64' : ''
        } my-24  p-4 md:ml-64`}

        // xl:max-w-[800px] xl:mx-auto
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
