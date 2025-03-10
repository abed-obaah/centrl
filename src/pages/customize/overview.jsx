import EventIcon from '../../assets/event-icon.svg';
import OrganizerIcon from '../../assets/organizers-icon.svg';
import LocationIcon from '../../assets/location-icon.svg';
import CategoryIcon from '../../assets/category-icon.svg';
import { useState } from 'react';
import Invites from "../../components/Invites"


import edit from '../../assets/Edit_Fill.png'
import addRing from '../../assets/Add_Ring.png'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isOrganizersModalOpen, setIsOrganizersModalOpen] = useState(false);
  const [isEventCategoriesModalOpen, setIsEventCategoriesOpen] =
    useState(false);

  return (
    <div className="md:max-w-[1000px] md:ml-20">
      <div className="mb-8">
        <h1 className="text-300 font-600">Overview</h1>
      </div>

      {/* Overview Cards */}
      <div className="mb-16 grid gap-4 md:grid-cols-2 border-b-2 border-muted pb-10">
        <div className="rounded-xl bg-card p-6 shadow-sm">
            <div className='flex justify-between'>
                        <h2 className="mb-16 text-200  text-foreground font-700">
                            Event Brief
                        </h2>
                        <Link to={'/customize'}>
                            <img src={edit}  alt="" className="w-4 h-4 object-contain"  />
                        </Link>
                    
            </div>
         
          <div>
            <div className="flex items-center gap-10">
              <p className="text-black font-600">Saturday, Aug 17</p>
            
            </div>
            <div className="flex items-center gap-12">
              <p className="text-black font-600">10:00 AM GMT+1</p>
            </div>
            <div className="flex items-center gap-[4.5rem]">
              <p className="text-black font-600">Zoom</p>
            </div>
            <div className="flex items-center gap-[4.5rem]">
              <p className="text-black font-600">28 Online Participants</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm">
         
          <div className='flex justify-between'>
                     <h2 className="mb-16 text-200 font-600 text-foreground">Reminder</h2>
                    <img src={addRing}  alt="" className="w-6 h-6 object-contain"  />
            </div>

          <div className='flex space-x-8'>
            <div className="flex items-center gap-1">
            <p className="text-500 font-500">0</p>
              <p className="text-black font-600">Sent</p>
              
            </div>

            <div className="flex items-center gap-1">
            <p className="text-500 font-500">3</p>
              <p className="text-black font-600">Pending</p>
            
            </div>
          </div>
          <div className=''>

            <div className="flex items-center gap-10">
              <p className="text-foreground font-400">Send reminders to your guests to keep them excited about your upcoming event</p>
            
            </div>
          </div>
        </div>
      </div>
      <Invites/>
    </div>
  );
};

export default Dashboard;
