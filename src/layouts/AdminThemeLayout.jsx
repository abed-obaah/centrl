import { Outlet } from 'react-router-dom';

const AdminThemeLayout = () => {
  return (
    <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
      <Outlet />
    </div>
  );
};

export default AdminThemeLayout;
