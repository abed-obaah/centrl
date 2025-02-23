import React from 'react';
import Boluvard from '../assets/grove.png'
import parties from '../assets/parties.png'
import image1 from '../assets/image-1.png'
import image2 from '../assets/image-2.png'
import eko from '../assets/eko.png'
import verified from '../assets/verified.png'
import userAdd from '../assets/group-user.png'
import snapchat from '../assets/snapchat.png'
import ig from '../assets/instagram.png'
import youtube from '../assets/youtube.png'

const Competition = () => {
    
    const gradientImages = [
        image1,
        image2,
        image1,
        image1,
      ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-b-[#00000005] pb-20">
        <div className="flex space-x-36">
            <div className='flex  gap-4'>
            <img
            src={Boluvard}
            alt="Event"
            className="w-40 h-40"
          />
          <div>
            <h1 className="text-[27px] font-800">Even In The Day Brand Competition</h1>
            <h2 className="text-[#000000] text-[15px]">Explore popular events near you, browse by category, or <br/> check out some of the great community calendars.</h2>
            <div className="w-56 py-4 px-2 rounded-lg bg-[#fff] flex justify-center items-center mt-4">
            <p className="text-[25px] p font-semibold bg-gradient-to-r from-[#71AC43] via-[#0DEEDC] via-[#56D2FF] to-[#FF7F7F] bg-clip-text text-transparent inline-block">
                20 : 12 : 03 : 15
            </p>
            </div>



          </div>
            </div>
         
          <img
            src={parties }
            alt="Event"
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div>
            <h1 className='font-800 text-[20px] font-sans'>Categories</h1>
            <p className='text-[15px] mt-3'>Select the category you wish to share your vote</p>
        </div>
      
        <div className="mt-6 grid grid-cols-4 gap-8 w-[990px]">
  {[1, 2, 3, 4].map((_, index) => (
    <div
      key={index}
      className="bg-[#fff] relative rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl   rounded-br-2xl h-60"
    >
      {/* Different Gradient Background for Each Card */}
      <div
        className="h-8 w-full "
        style={{
          backgroundImage: `url('${gradientImages[index]}')`,
          backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Card Content */}
      <div className='px-4'>
            <h2 className="mt-4 font-[700] text-[#000] text-[20px]">Best Dressed</h2>
            <h2 className="font-bold font-[700] text-[#000] text-[20px]">Award</h2>
      </div>
      

      {/* Profile Avatars */}
      <div className="flex -space-x-2 overflow-hidden mt-10 px-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block size-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-8 rounded-full ring-2 ring-white"
        />
      </div>

      <p className="text-gray-500 mt-2 px-4">302 Votes</p>
    </div>
  ))}
</div>
      
      </div>
     

      {/* About Event Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 flex space-x-6">
        <div>
                <h2 className="text-[20px] text-[#000000] font-[700] border-b pb-6 border-b-[#00000014]">About Event</h2>
                <p className="text-[#000] mt-2 text-[15px] font-[400] leading-8">
                ​In partnership with WeWork, this special weeklong edition of the House will offer 50<br/>founders access to a home base while they attend NY Tech Week events – <br/>dedicated co-working space, exclusive events, and curated meetings with Tech:NYC<br/> staff, VC leaders, and other Founder House partners.<br/>
                    ​+
                    ​In addition, Tech:NYC Founder House will host a series of NY Tech Week events<br/> open to the broader community. To see the full list of events at the House, click<br/> here.
                    ​Stay tuned for the itinerary of events hosted inside the House.
                </p>
        </div>

          {/* Hosted By Section */}
          <div className="mt-8 flex justify-end max-h-40">
  <div className="bg-white p-4 rounded-xl w-96 h-48">
    <h3 className="font-[600] text-[15px]">Hosted by</h3>
    <div className="flex gap-2 mt-2">
      <img src={eko} alt="Host" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col space-y-1">
        <div className="flex space-x-2">
          <span className="text-[15px]">Even in the Day</span>
          <img src={verified} alt="Host" className="w-6 h-6" />
        </div>
        <div className="flex space-x-2">
         <img src={userAdd} alt="Host" className="w-6 h-6" />
          <span className="text-[15px]">30 M</span>
        </div>
      </div>
    </div>

        <div className='flex space-x-2 items-center justify-between mt-10'>
            <div className='flex space-x-4'>
                 <img src={snapchat} alt="Host" className="w-8 h-8" />
                <img src={youtube} alt="Host" className="w-8 h-8" />
                <img src={ig} alt="Host" className="w-8 h-8" />
            </div>
       
            <button className="w-20 bg-[#fff] border border-[#00000080] text-[#000000B2] py-1 rounded-md">
            Follow
            </button>
        </div>
   
  </div>
            </div>

       
      </div>

    
    </div>
  );
};

export default Competition;
