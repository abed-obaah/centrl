import EventIcon from '../../assets/event-icon.svg';
import OrganizerIcon from '../../assets/organizers-icon.svg';
import LocationIcon from '../../assets/location-icon.svg';
import CategoryIcon from '../../assets/category-icon.svg';
import { useState } from 'react';
import AdminEventModal from '../../components/admin/AdminEventModal';
import AdminOrganizersModal from '../../components/admin/AdminOrganizersModal';
import AdminEventCategoriesModal from '../../components/admin/AdminEventCategoriesModal';

const Dashboard = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isOrganizersModalOpen, setIsOrganizersModalOpen] = useState(false);
  const [isEventCategoriesModalOpen, setIsEventCategoriesOpen] =
    useState(false);

  return (
    <div className="max-w-[800px] ml-20">
      <div className="mb-8">
        <h1 className="text-300 font-600">Welcome, Akpor!</h1>
      </div>

      {/* Overview Cards */}
      <div className="mb-16 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <h2 className="mb-16 text-200  text-foreground font-700">
            Platform Recap
          </h2>

          <div>
            <div className="flex items-center gap-10">
              <p className="text-black font-600">Total registered users</p>
              <p className="text-500 font-700">5.9 B</p>
            </div>
            <div className="flex items-center gap-12">
              <p className="text-black font-600">Total Events Created</p>
              <p className="text-500 font-700">3</p>
            </div>
            <div className="flex items-center gap-[4.5rem]">
              <p className="text-black font-600">Total Tickets Sold</p>
              <p className="text-500 font-700">3</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm">
          <h2 className="mb-16 text-200 font-600">Revenue Overview</h2>

          <div>
            <div className="flex items-center gap-12">
              <p className="text-black font-600">Total revenue generated</p>
              <p className="text-500 font-700">5.9 B</p>
            </div>

            <div className="flex items-center gap-[7rem]">
              <p className="text-black font-600">Platform's share</p>
              <p className="text-500 font-700">3</p>
            </div>

            <div className="flex items-center gap-10">
              <p className="text-black font-600">Total payouts to organizer</p>
              <p className="text-500 font-700">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div>
        <h2 className="mb-4 text-200 font-600">Analysis</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div
            onClick={() => setIsEventModalOpen(true)}
            className="rounded-xl bg-card p-6 shadow-sm cursor-pointer"
          >
            <img className="mb-8" src={EventIcon} alt="Most popular even" />
            <h3 className="mb-1 text-200 font-700">Most popular event</h3>
            <p className="text-100 font-600 text-foreground">Top 50</p>
          </div>

          <div
            onClick={() => setIsOrganizersModalOpen(true)}
            className="rounded-xl bg-card p-6 shadow-sm cursor-pointer"
          >
            <img
              className="mb-8"
              src={OrganizerIcon}
              alt="Top-performing Organizers"
            />

            <h3 className="mb-1 text-200 font-700">
              Top-performing Organizers
            </h3>
            <p className="text-100 font-600 text-foreground">Top 100</p>
          </div>

          <div className="rounded-xl bg-card p-6 shadow-sm">
            <img className="mb-8" src={LocationIcon} alt="Top user locations" />
            <h3 className="mb-1 text-200 font-700">Top user locations</h3>
            <p className="text-100 font-600 text-foreground">Nigeria</p>
          </div>

          <div
            onClick={() => setIsEventCategoriesOpen(true)}
            className="rounded-xl bg-card p-6 shadow-sm cursor-pointer"
          >
            <img
              className="mb-8"
              src={CategoryIcon}
              alt="Top Event Categories"
            />
            <h3 className="mb-1 text-200 font-700">Top Event Categories</h3>
            <p className="text-100 font-600 text-foreground">8 categories</p>
          </div>
        </div>
      </div>

      <AdminEventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />

      <AdminOrganizersModal
        isOpen={isOrganizersModalOpen}
        onClose={() => setIsOrganizersModalOpen(false)}
      />

      <AdminEventCategoriesModal
        isOpen={isEventCategoriesModalOpen}
        onClose={() => setIsEventCategoriesOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
