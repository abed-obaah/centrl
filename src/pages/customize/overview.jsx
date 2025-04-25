import Invites from "../../components/Invites";

import edit from "../../assets/Edit_Fill.png";
import addRing from "../../assets/Add_Ring.png";
import { Link, useParams } from "react-router-dom";
import Guests from "../../components/user/Guests";
import Hosts from "../../components/user/Hosts";
import { useFetch } from "../../hooks/useFetch";

const Overview = () => {
  const { id } = useParams();

  const { data: eventData, isLoading } = useFetch({
    queryKey: ["event", id],
    fetcher: () => getEvent(id),
    dataPath: "data",
  });

  if (!eventData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-100 font-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="md:ml-14 md:max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-300 font-600">Overview</h1>
      </div>

      {/* Overview Cards */}
      <div className="mb-12 mr-auto grid max-w-[761px] gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-card px-6 py-4 shadow-sm">
          <div className="flex justify-between">
            <h2 className="mb-16 text-100 font-600 text-foreground">
              Event Brief
            </h2>
            <Link to={"/customize"}>
              <img src={edit} alt="" className="h-4 w-4 object-contain" />
            </Link>
          </div>

          <div className="translate-y-4">
            <div className="mb-1 flex items-center gap-10">
              <p className="text-50 font-600 text-black">Saturday, Aug 17</p>
            </div>
            <div className="mb-1 flex items-center gap-12">
              <p className="text-50 font-600 text-black">10:00 AM GMT+1</p>
            </div>
            <div className="mb-1 flex items-center gap-[4.5rem]">
              <p className="text-50 font-600 text-black">Zoom</p>
            </div>
            <div className="flex items-center gap-[4.5rem]">
              <p className="text-50 font-600 text-black">
                28 Online Participants
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex justify-between">
            <h2 className="mb-16 text-100 font-600 text-foreground">
              Reminder
            </h2>
            <img src={addRing} alt="" className="h-6 w-6 object-contain" />
          </div>

          <div className="mb-4 flex space-x-8">
            <div className="flex items-center gap-1">
              <p className="text-600 font-500">0</p>
              <p className="translate-y-1 text-50 font-600 text-black">Sent</p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-600 font-500">3</p>
              <p className="translate-y-1 text-50 font-600 text-black">
                Pending
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-10">
              <p className="text-50 font-600 text-black">
                Send reminders to your guests to keep them excited about your
                upcoming event
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="pb-12 text-[#000]/15" />

      {/* Invites */}
      <Invites />

      <hr className="text-[#000]/15" />

      {/* Guests */}
      <Guests />

      {/* Hosts */}
      <Hosts eventData={eventData} />
    </div>
  );
};

export default Overview;
