import { useState } from 'react';
import UserEvent from './UserEvent';
import event1 from '../../../assets/event1.png';
import event2 from '../../../assets/event2.png';
import pageImage from '../../../assets/page-image.png';
import TabSwitcher from '../../../components/dashboard/events/TabSwitcher';
// import { useSelector } from "react-redux";

const UserEventPage = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <>
      <div className="mt-32 px-4 md:px-0 mb-20 max-w-[1000px] mx-auto">
        <div className="md:grid md:grid-cols-[2fr_1fr] md:gap-6">
          <div>
            <div className="flex justify-between mb-6 items-center">
              <h2 className="text-400 font-600">Events</h2>
              <div className="flex items-center bg-[#000]/15 rounded-2xl  pl-0">
                <TabSwitcher
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>

            {activeTab === 'Upcoming' && <UserEvent />}

            {activeTab === 'Past' && (
              <img
                className="w-[400px] mt-20 2xl:w-[500px] object-cover mx-auto"
                src={pageImage}
                alt="page Image"
              />
            )}
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <img className="mb-4" src={event1} alt="event1" />
            <img src={event2} alt="event 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEventPage;
