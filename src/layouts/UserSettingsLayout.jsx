import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';

const UserSettingsLayout = () => {
  return (
    <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto px-4">
      <AdminHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserSettingsLayout;
