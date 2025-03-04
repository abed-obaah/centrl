import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EventNavbar from './EventNavbar';
import { Search } from 'lucide-react';
import { AddSquare, Notification } from 'iconsax-react';
import ProfileModal from '../ProfileModal';
import Modal from '../Modal';

const EventHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const modalRef = useRef(null);

  const userData = {
    name: 'Tim Cook',
    email: 'tim.cook@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <header className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
        <div className="flex items-center justify-between p-4 max-w-[1290px] 2xl:max-w-[1500px] mx-auto">
          <div className="flex items-center gap-20 xl:gap-32 2xl:gap-[12rem]">
            {/* Logo */}
            <Link to="/">
              <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md-plus:flex md-plus:gap-6">
              <li>
                <Link
                  to={'/events'}
                  className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to={'/discover'}
                  className="font-500 text-50 text-foreground hover:text-black transition-colors duration-300 ease-out"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  Discover
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Navbar */}
            <EventNavbar
              isClicked={isClicked}
              toggleNavClick={toggleNavClick}
            />

            <div className="flex items-center md:ml-12">
              <div className="flex items-center gap-4">
                <AddSquare size="24" color="#000" />
                <Search
                  onClick={() => setModalVisible(true)}
                  size="24"
                  color="#000"
                  className="cursor-pointer"
                />
                <span className="hidden md:block font-500 text-50 text-foreground">
                  5:33 PM GMT+1
                </span>
              </div>
              <div className="flex items-center gap-4 ml-10">
                <Notification size="24" color="#000" />
                <div
                  className="shrink-0 cursor-pointer relative"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    alt={userData.name}
                    src={userData.imageUrl}
                    className="size-10 rounded-full"
                  />
                  {isOpen && (
                    <ProfileModal
                      isOpen={isOpen}
                      onClose={() => setIsOpen(false)}
                      user={userData}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Menu Icons */}
            <div
              className="z-10 inline-block md-plus:hidden"
              onClick={toggleNavClick}
            >
              {isClicked ? (
                <button>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              ) : (
                <button>
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default EventHeader;
