import { useState } from "react";
import UserEvent from "./UserEvent";
import event1 from "../../../assets/event1.png";
import event2 from "../../../assets/event2.png";
import pageImage from "../../../assets/page-image.png";
import TabSwitcher from "../../../components/dashboard/events/TabSwitcher";
import Image from "../../../components/Image";

const UserEventPage = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <>
      <div className="mx-auto mb-20 mt-32 max-w-[1000px] px-4 md:px-0">
        <div className="md:grid md:grid-cols-[2fr_1fr] md:gap-6">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-400 font-600">Events</h2>
              <div className="flex items-center rounded-2xl bg-[#000]/15 pl-0">
                <TabSwitcher
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>

            {activeTab === "Upcoming" && <UserEvent />}

            {activeTab === "Past" && (
              <img
                className="mx-auto mt-20 w-[400px] object-cover 2xl:w-[500px]"
                src={pageImage}
                alt="page Image"
              />
            )}
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <Image className="mb-4" src={event1} alt="event1" />
            <Image src={event2} alt="event 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEventPage;
