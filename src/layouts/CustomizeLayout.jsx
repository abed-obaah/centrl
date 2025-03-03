import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import CustomizeNavbar from '../components/customize/CustomizeNavbar';
import CustomizeHeader from '../components/customize/CustomizeHeader';
import DescriptionModal from '../components/DescriptionModal';


const CustomizeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
      {/* <AdminHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <CustomizeHeader/>
     

      <div className="fixed left-0 top-0 w-full z-40">
        <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
          <CustomizeNavbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>

      <main
        className={`transition-margin duration-300 ease-in-out ${
          sidebarOpen ? 'md:ml-64' : ''
        } my-24  p-4 md:ml-64`}
      >
        <Outlet />
      </main>
       <DescriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CustomizeLayout;
