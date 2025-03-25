import location from "../../../assets/navigation.png";
import bg from "../../../assets/bg.png";
import Love from "../../../assets/raveX.png";
import Brain from "../../../assets/rave01.png";
import Maps from "../../../assets/maps.png";
import RegisterEventBg from "../../../assets/registerEventBg.png";
import face from "../../../assets/face.png";
import Verified from "../../../assets/verified-small.png";
import { useEffect, useRef } from "react";

const EventPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEF6D5] p-8 text-black">
      <div className="mt-28 flex w-full max-w-[900px] flex-col justify-center space-x-10 md:flex-row">
        {/* Event Image & Title */}
        <div className="flex flex-col items-center">
          <div>
            <img
              src={Love}
              alt="Event"
              className="mt-5 h-80 w-80 rounded-lg object-cover"
            />
          </div>
          <div className="w-full">
            <h2 className="mt-6 w-80 text-left text-50 font-500">Hosted by</h2>
            <div className="mt-6 flex items-center space-x-3">
              <img
                src={Brain}
                alt="Event"
                className="h-12 w-12 rounded-lg object-cover"
              />

              <div className="flex items-center space-x-3">
                <p className="text-left text-50 font-500">Rave</p>
                <img
                  src={Verified}
                  alt="Event"
                  className="h-4 w-4 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                />
              </div>

              <p className="text-left text-50 font-500">302 Going</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left md:text-left">
          <h1 className="font-bold text-800">Rave Warri</h1>
          <div className="flex items-center space-x-3 pt-10">
            <div
              className="relative flex h-20 w-20 items-center justify-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img src={location} alt="Event" className="h-6 w-6 rounded-md" />
            </div>
            <div className="px-1">
              <p className="text-gray-300">Monday, June 3</p>
              <p className="text-gray-300">9:00 AM - Jun 7, 5:00 PM EDT</p>
              <p className="text-gray-400">86 E King St Lamar, Arkansas, US</p>
            </div>
          </div>

          {/* Registration Card */}
          <div
            className="relative mt-6 w-[121%] max-w-[550px] rounded-[23px] px-1.5 py-1.5 text-black"
            style={{
              backgroundImage: `url(${RegisterEventBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="rounded-lg">
              <div className="mx-auto flex items-center justify-between rounded-tl-[23px] rounded-tr-[23px] bg-opeque px-8 py-2">
                <p className="text-whiteOpaque text-100 font-600">
                  Registration
                </p>
              </div>
              <div className="mt-5 flex items-center space-x-3 px-8">
                <img
                  src={face}
                  alt="Event"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <p className="text-100 text-white">Akpor</p>
                <div className="h-1 w-1 rounded-full bg-white"></div>
                <p className="text-50 text-white">Favourakpor2017@gmail.com</p>
              </div>
              <div className="mt-5 flex items-center space-x-3 px-9">
                {/* <img src={wallet} alt="Event" className="w-6 h-6 object-cover" /> */}
                <p className="text-100 text-white">Price:</p>
                <p className="text-200 font-500 text-white">
                  <span>£</span>250
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="mt-3 w-[450px] rounded-lg bg-subColorBtn py-2 text-white">
                  Pay to Register
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full max-w-[550px]">
            <h2 className="border-b-gray border-b pb-10 text-50 font-500">
              About Event
            </h2>
            <p className="pt-10">
              ​In partnership with WeWork, this special weeklong edition of the
              House will offer 50 founders access to a home base while they
              attend NY Tech Week events – dedicated co-working space, exclusive
              events, and curated meetings with Tech:NYC staff, VC leaders, and
              other Founder House partners.
              <br />
              ​+
              <br />
              ​In addition, Tech:NYC Founder House will host a series of NY Tech
              Week events open to the broader community. To see the full list of
              events at the House, click here. ​Stay tuned for the itinerary of
              events hosted inside the House.
              <br />
              ​+
              <br />
              ​Startup:NYC is an initiative of Tech:NYC focused on supporting
              New York’s next superstar founders. Learn more
              at startups.technyc.org. This event is a part of #TechWeek – a
              week of events hosted by VCs and startups to bring together the
              tech ecosystem.
            </p>
          </div>

          <div className="mt-10 flex w-full justify-between space-x-8">
            <div className="h-64 w-96 rounded-[23px] bg-[#cfb8b6] p-4">
              <h1 className="text-100 font-400 text-black">Location</h1>
              <img
                src={Maps}
                alt="Event"
                className="mt-10 h-40 w-full rounded-lg object-cover"
              />
            </div>

            <div className="relative h-64 w-40 overflow-hidden rounded-[23px] bg-[#cfb8b6]">
              <img
                src={Maps}
                alt="Event"
                className="h-64 rounded-[23px] object-cover p-1"
              />
              {/* <h1 className="absolute top-4 left-2 text-100 font-600 text-white ">
                    Lil Wayne
                    </h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
