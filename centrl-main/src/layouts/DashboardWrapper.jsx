import { Outlet } from 'react-router-dom';
import EventHeader from '../components/dashboard/EventHeader';

const DashboardWrapper = () => {
  return (
    <>
      <EventHeader />
      <Outlet />
    </>
  );
};

export default DashboardWrapper;
