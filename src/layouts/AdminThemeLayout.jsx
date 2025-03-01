import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';

const AdminThemeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
      <AdminHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
};

export default AdminThemeLayout;
