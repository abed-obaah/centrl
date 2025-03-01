import React from "react";
import location from '../../../assets/navigation.png'
import bg from '../../../assets/bg.png'
import vid from '../../../assets/vid.mp4'
import Love from '../../../assets/raveX.png'
import Brain from '../../../assets/rave01.png'
import Maps from '../../../assets/maps.png'
import LilWayne from '../../../assets/lil-wayne.png'
import RegisterEventBg from '../../../assets/registerEventBg.png'
import face from '../../../assets/face.png'
import wallet from '../../../assets/wallet.png'
import Verified from '../../../assets/verified-small.png'
import { useEffect, useRef } from "react";

const EventPage = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);
  
  return (
    <div className="bg-eventBg7 min-h-screen text-white p-8 flex justify-center items-center ">
          <div className="flex flex-col md:flex-row space-x-10 w-full max-w-[900px] justify-center mt-28 ">
            {/* Event Image & Title */}
            <div className="flex flex-col items-center">
            <div>
              
              <img src={Love} alt="Event" className="w-80 h-80 rounded-lg object-cover mt-5" />
            </div>
                      <div className="w-full">
                          <h2 className="text-50 font-500 text-left w-80 mt-6">Hosted by</h2>
                          <div className="flex items-start space-x-3 items-center mt-6">
                              <img src={Brain} alt="Event" className="w-12 h-12 rounded-lg object-cover" />

                            <div className="flex items-center space-x-3">
                              <p className="text-50 font-500 text-left">Rave</p>
                              <img src={Verified} alt="Event" className="w-4 h-4 rounded-lg object-cover" />
                            </div>
                          </div>


                          <div className="flex mt-5 justify-between">
                          <div className="flex -space-x-1">
                                  <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                                    className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
                                  />
                                  <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                                    className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
                                  />
                                  <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                                    className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
                                  />
                                  <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=20&w=512&h=512&q=80"
                                    className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
                                  />
                            </div>


                                  <p className="text-50 font-500 text-left">302 Going</p>
                          </div>
                  </div>
      </div>

        
            <div className="flex flex-col text-left md:text-left">
              <h1 className="text-800 font-bold">Rave Warri</h1>
              <div className="flex items-center space-x-3 pt-10">
                <div
                  className="relative w-20 h-20 flex items-center justify-center "
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <img src={location} alt="Event" className="w-6 h-6 rounded-md" />
                </div>
                <div className="px-1">
                  <p className="text-gray-300">Monday, June 3</p>
                  <p className="text-gray-300">9:00 AM - Jun 7, 5:00 PM EDT</p>
                  <p className="text-gray-400">86 E King St Lamar, Arkansas, US</p>
                </div>
              </div>
        
              {/* Registration Card */}
              <div
                className="text-black rounded-[23px] px-1.5 py-1.5 mt-6 relative w-[121%] max-w-[550px]"
                style={{ backgroundImage: `url(${RegisterEventBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="rounded-lg">
                  <div className="flex justify-between items-center bg-opeque px-8 py-2 mx-auto rounded-tl-[23px] rounded-tr-[23px]" >
                    <p className="font-600 text-100 text-whiteOpaque">Registration</p>
                    
                  </div>
                  <div className="flex items-center mt-5 px-8 space-x-3">
                    <img src={face} alt="Event" className="w-8 h-8 rounded-full object-cover" />
                    <p className="text-100 text-white">Akpor</p>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <p className="text-50 text-white">Favourakpor2017@gmail.com</p>
                  </div>
                  <div className="flex items-center mt-5 px-9 space-x-3">
                    {/* <img src={wallet} alt="Event" className="w-6 h-6 object-cover" /> */}
                    <p className="text-100 text-white">Price:</p>
                    <p className="text-200 font-500 text-white"><span>£</span>250</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="w-[450px] bg-subColorBtn text-white py-2 mt-3 rounded-lg ">
                      Pay to Register
                    </button>
                  </div>
                </div>
              </div>
        
              <div className="w-full max-w-[550px] mt-20">
                <h2 className="text-50 font-500 border-b pb-10 border-b-gray">About Event</h2>
                <p className="pt-10">​In partnership with WeWork, this special weeklong edition of the House will offer 50 founders access to a home base while they attend NY Tech Week events – dedicated co-working space, exclusive events, and curated meetings with Tech:NYC staff, VC leaders, and other Founder House partners.<br/>
                ​+<br/>
                ​In addition, Tech:NYC Founder House will host a series of NY Tech Week events open to the broader community. To see the full list of events at the House, click here. ​Stay tuned for the itinerary of events hosted inside the House.<br/>
                ​+<br/>
                ​Startup:NYC is an initiative of Tech:NYC focused on supporting New York’s next superstar founders. Learn more at startups.technyc.org. This event is a part of #TechWeek – a week of events hosted by VCs and startups to bring together the tech ecosystem.</p>
              </div>

              <div className="flex justify-between mt-10 space-x-8 w-full">
              <div className="bg-[#cfb8b6] h-64 w-96 rounded-[23px] p-4">
                <h1 className="text-100 font-400 text-black">Location</h1>
                <img src={Maps} alt="Event" className="w-full h-40 rounded-lg object-cover mt-10" />
              </div>

              <div className="bg-[#cfb8b6] h-64 w-40 rounded-[23px] relative overflow-hidden">
                  <img src={Maps} alt="Event" className="h-64 p-1 rounded-[23px] object-cover" />
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
