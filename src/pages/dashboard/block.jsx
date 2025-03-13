import { useState } from 'react';
import Map from '../../assets/map.png';
import Upload from '../../assets/upload.png';
import Indicator from '../../assets/indicator.png';
import userImage from '../../assets/user.png';
import bgGradient from '../../assets/gradient.png';
import MoreOptions from '../../components/MoreOptions';
import SideModal from '../../components/SidebarModal';
import DescriptionModal from '../../components/DescriptionModal';
import { Link } from 'react-router-dom';

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

  const [bgImage, setBgImage] = useState(bgGradient);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgImage(imageUrl);
    }
  };

  const [videoName, setVideoName] = useState('Upload Video');

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoName(file.name);
    }
  };

  return (
    <>
      <div className="mt-32 px-4 md:px-0 mb-20 max-w-[1000px]  mx-auto">
        <form>
          <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="md:sticky  md:top-28 md:self-start ">
              <div className="max-w-[300px] ml-auto">
                <div className="mt-2">
                  <div
                    onClick={() => setIsOpenSide(true)}
                    className=" flex  space-x-4 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <img src={Map} alt="" className="w-8 h-10 object-contain" />

                    <div className="">
                      <p>Theme</p>
                      <p className="text-[#000000] font-semibold">Minimalist</p>
                    </div>
                  </div>
                  <label
                    htmlFor="videoUpload"
                    className="cursor-pointer mt-5 flex items-center justify-between w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <div>
                      <p className="truncate">{videoName}</p>
                    </div>

                    <img
                      src={Upload}
                      alt="Upload"
                      className="w-8 h-10 object-contain"
                    />

                    <input
                      id="videoUpload"
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                  </label>
                  <div
                    style={{
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    className="relative mt-5 flex items-end justify-between w-full h-64 rounded-xl px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  >
                    <div className="items-end mt-10">
                      <p className=" font-700">Plus +</p>
                      <p className="mt-10"></p>
                    </div>

                    {/* Upload button */}
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      <img
                        src={Upload}
                        alt="Upload"
                        className="w-8 h-10 object-contain"
                      />
                    </label>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[500px]">
              <div className="mb-10">
                <label
                  htmlFor="last-name"
                  className="block mb-2 font-500 text-black"
                >
                  Event Title
                </label>
                <input
                  id="name-event"
                  name="Name your event"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Name your event"
                  className="w-full px-4 py-3 rounded-lg  bg-white placeholder:text-[#000]/70     outline-none"
                />
              </div>

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <p className="font-500">Start</p>
                  <div className="flex items-center gap-2">
                    <input
                      id="city1"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="w-24 rounded-xl bg-white p-3    outline-none "
                    />

                    <div className="relative">
                      <input
                        id="city2"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="w-24 rounded-xl  bg-white p-3   outline-none "
                      />

                      <span className="text-black font-500 absolute right-4 top-3">
                        PM
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-black font-500  rounded-md bg-white px-6 py-1.5 ">
                  Public
                </span>
              </div>

              <div className="mb-10">
                <p className="font-500 text-black mb-2">Location</p>
                <div className="flex items-center gap-6">
                  <div className="w-full">
                    <div className="flex items-center gap-4 rounded-xl bg-white px-2 py-2">
                      <img src={Indicator} alt="icon" className="size-8" />
                      <p className="text-black font-600">Virtual</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex  items-center gap-4 rounded-xl bg-white px-2 py-2">
                      <img src={userImage} alt="icon" className="size-8" />
                      <p className="text-black font-600">In Person</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <label htmlFor="email" className="block font-500">
                  About
                </label>
                <div className="mt-2" onClick={() => setIsModalOpen(true)}>
                  <input
                    id="Description"
                    name="Description"
                    type="text"
                    readOnly
                    placeholder="Description..."
                    className="w-full px-4 py-3 rounded-lg  bg-white outline-none"
                  />
                </div>
              </div>

              <div className="relative mb-10">
                <label className="block  font-500 mb-2">Event Category</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full text-left text-[#000]/70 px-4 py-3 rounded-lg  bg-white outline-none "
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
                        className=" px-4 py-2 text-left hover:bg-pink-50 transition first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <MoreOptions />
              <Link to={'/event:id'}>
                <button className="bg-[#FF6F02] text-white w-40 py-2 rounded-xl mt-5">
                  Create Event
                </button>
              </Link>
            </div>
          </div>
        </form>
        <DescriptionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <SideModal isOpen={isOpenSide} onClose={() => setIsOpenSide(false)} />
      </div>
    </>
  );
}
