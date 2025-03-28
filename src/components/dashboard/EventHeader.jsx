import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import EventNavbar from "./EventNavbar";
import { Search } from "lucide-react";
import { AddSquare, Notification } from "iconsax-react";
import ProfileModal from "../ProfileModal";
import SearchModal from "../SearchModal";
import { useSelector } from "react-redux";

const EventHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { token, user_id, name, email, googleId, profileImage } = useSelector(
    (state) => state.auth,
  );

  // const modalRef = useRef(null);

  const userData = {
    name,
    token,
    email,
    user_id,
    googleId,
    imageUrl: profileImage
      ? profileImage
      : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  // console.log("userData:", userData);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <header className="via-neutral-100/50 supports-[backdrop-filter]:bg-white/3 fixed top-0 z-[500] w-full bg-gradient-to-r from-white/50 to-white/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1290px] items-center justify-between p-4 2xl:max-w-[1500px]">
          <div className="flex items-center gap-20 xl:gap-32 2xl:gap-[12rem]">
            {/* Logo */}
            <Link to="/">
              <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md-plus:flex md-plus:gap-6">
              <li>
                <Link
                  to={"/events"}
                  className="text-50 font-500 text-foreground transition-colors duration-300 ease-out hover:text-black"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to={"/discover"}
                  className="text-50 font-500 text-foreground transition-colors duration-300 ease-out hover:text-black"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
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

            <div className="flex items-center md:ml-12 md:gap-8">
              <div className="flex items-center gap-4">
                <Link to="/create-event">
                  <AddSquare size="24" color="#000" />
                </Link>
                <Search
                  onClick={() => setModalVisible(true)}
                  size="24"
                  color="#000"
                  className="cursor-pointer"
                />
                <span className="hidden text-50 font-500 text-foreground md:block">
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
              <div className="ml-10 flex items-center gap-4">
                <Notification size="24" color="#000" />
                <div
                  className="relative shrink-0 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    alt={userData.name}
                    src={userData.imageUrl}
                    className="size-9 rounded-full"
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
      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default EventHeader;
