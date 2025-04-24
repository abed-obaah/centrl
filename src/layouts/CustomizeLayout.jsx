import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import CustomizeNavbar from "../components/customize/CustomizeNavbar";
import CustomizeHeader from "../components/customize/CustomizeHeader";
import DescriptionModal from "../components/DescriptionModal";

const CustomizeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="relative mx-auto max-w-[1290px] 2xl:max-w-[1500px]">
      <CustomizeHeader eventId={id} />

      <div className="fixed left-0 top-0 z-40 w-full">
        <div className="relative mx-auto max-w-[1290px] 2xl:max-w-[1500px]">
          <CustomizeNavbar
            eventId={id}
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      </div>

      <main
        className={`transition-margin duration-300 ease-in-out ${
          sidebarOpen ? "md:ml-64" : ""
        } my-24 p-4 md:ml-64`}
      >
        <Outlet />
      </main>
      <DescriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CustomizeLayout;
