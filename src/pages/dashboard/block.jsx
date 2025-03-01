import React from 'react'
import Header from './header';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import Map from '../../assets/map.png'
import Upload from '../../assets/upload.png'
import Indicator from '../../assets/indicator.png'
import userImage from '../../assets/user.png'
import bgGradient from '../../assets/gradient.png'
import { ChevronDown } from 'lucide-react';
import MoreOptions from '../../components/MoreOptions'
import SideModal from "../../components/SidebarModal";
import DescriptionModal from '../../components/DescriptionModal';

export default function block() {
    const [role, setRole] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSide, setIsOpenSide] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const roles = [
        'Event Organizer',
        'Event Lover',
        'Influencer',
        'Startup founder',
        'Brand/Company Representative',
        'Investor/Sponsor',
        'Media/Press',
        'Government/Policy Maker',
        'Student/Scholar',
        'Other',
      ];
  return (
    <>
        {/* <Header/> */}

        <div className='mt-24'>
        <form>
                <div className="space-y-12">
                    <div className="w-[900px] mx-auto grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    {/* <div>
                       
                    </div> */}

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-3">
                       
                        <div className="mt-2"  >
                           <div  onClick={() => setIsOpenSide(true)} className=" flex  space-x-4 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                           <img src={Map} alt="" className="w-8 h-10 object-contain"  />

                                <div className=''>
                                    <p>Theme</p>
                                    <p className="text-[#000000] font-semibold">Minimalist</p>
                                </div>
                                    
                           </div>
                           <div  className="mt-5 flex items-center justify-between w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <div className=''>
                                    <p>Upload Video</p>
                                </div>
                             <img src={Upload}  alt="" className="w-8 h-10 object-contain"  />
                           </div>
                           <div
                            style={{
                                backgroundImage: `url(${bgGradient})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="mt-5 flex items-end justify-between w-full h-64 rounded-xl px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            >
                            <div className="items-end mt-10">
                                <p className='text-md font-semibold'>Plus +</p>
                                <p className='mt-10'></p>
                            </div>
                            <img src={Upload} alt="" className="w-8 h-10 object-contain" />
                            </div>



                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                         Event Title
                        </label>
                        <div className="mt-2">
                            <input
                            id="name-event"
                            name="Name your event"
                            type="text"
                            autoComplete="family-name"
                             placeholder="Name your event"
                            className="w-[400px] px-4 py-3 rounded-lg  bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition text-left flex items-center justify-between"
                            />
                        </div>
                        <div className="flex items-center justify-between  space-x-32 mt-10">
                                    <div className="flex items-center space-x-2 flex-grow">
                                        <p>start</p>
                                        <input
                                        id="city1"
                                        name="city"
                                        type="text"
                                        autoComplete="address-level2"
                                        className="block w-16 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none sm:text-sm"
                                        />
                                        <input
                                        id="city2"
                                        name="city"
                                        type="text"
                                        placeholder="PM"
                                        autoComplete="address-level2"
                                        className="block w-16 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder-black border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none sm:text-sm"
                                        />
                                    </div>

                                    <input
                                        id="city3"
                                        name="city"
                                        type="text"
                                        placeholder="Public"
                                        autoComplete="address-level2"
                                        className="block w-24 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder-black border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none sm:text-sm"
                                    />
                                    </div>


                            <div className='flex space-x-10'>
                            <div className="sm:col-span-4 mt-20">
                                                    <label htmlFor="Location" className="block text-sm/6 font-medium text-gray-900">
                                                    Location
                                                    </label>
                                                    <div className="mt-2 relative">
                                                                <img
                                                                    src={Indicator} // Replace 'Indicator' with your image source
                                                                    alt="icon"
                                                                    className="absolute left-1 top-1/2 transform -translate-y-1/2 w-10 h-10"
                                                                />
                                                                <input
                                                                    id="Location"
                                                                    name="Location"
                                                                    type="text"
                                                                    placeholder="Virtual"
                                                                    className="placeholder-black block w-[300px] rounded-md bg-white pl-14 py-3.5 text-base text-gray-900 border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none sm:text-sm"
                                                                />
                                                            </div>


                                                    
                                                    </div>
                                                    <div className="sm:col-span-4 mt-20">
                                                    <label htmlFor="Location" className="block text-sm/6 font-medium text-gray-900">
                                                    Location
                                                    </label>
                                                    <div className="mt-2 relative">
                                                                <img
                                                                    src={userImage} // Replace 'Indicator' with your image source
                                                                    alt="icon"
                                                                    className="absolute left-1 top-1/2 transform -translate-y-1/2 w-10 h-10"
                                                                />
                                                                <input
                                                                    id="Location"
                                                                    name="Location"
                                                                    type="text"
                                                                    placeholder="In Person"
                                                                    className="placeholder-black block  w-[300px] rounded-md bg-white pl-14 py-3.5 text-base text-gray-900 border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none sm:text-sm"
                                                                />
                                                            </div>
                                                    </div>
                            </div>
                         <div className="sm:col-span-4 mt-10">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            About
                        </label>
                        <div className="mt-2" onClick={() => setIsModalOpen(true)}>
                            <input
                            id="Description"
                            name="Description"
                            type="text"
                            readOnly
                            placeholder="Description..."
                           className="w-[400px] px-4 py-3 rounded-lg  bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition text-left flex items-center justify-between"
                            />
                        </div>
                        
                        </div>

                        <div className="relative mt-5">
                        <label className="block text-sm/6 font-medium text-gray-900 mb-2">
                              Event Category
                        </label>
                                <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-[400px] px-4 py-3 rounded-lg  bg-white border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition text-left flex items-center justify-between"
                                >
                                <span className={role ? 'text-gray-900' : 'text-gray-400'}>
                                    {role || 'None Selected'}
                                </span>
                                </button>

                                {isOpen && (
                                <div className="absolute pb-4 top-full left-0 right-0 mt-1 bg-[#fff] border border-[#CD2574] rounded-lg shadow-lg z-10">
                                    {roles.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => {
                                        setRole(option);
                                        setIsOpen(false);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-pink-50 transition first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {option}
                                    </button>
                                    ))}
                                </div>
                                )}
                            </div>
                            <MoreOptions/>
                            <button className='bg-[#FF6F02] text-white w-40 py-3.5 rounded-xl mt-5'>Create Event</button>
                        </div>
                            
                    </div>
                    </div>
                </div>
    </form>
             <DescriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <SideModal isOpen={isOpenSide} onClose={() => setIsOpenSide(false)} />
        </div>
    </>
  )
}
