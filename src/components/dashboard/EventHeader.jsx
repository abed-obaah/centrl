import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo-dark.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventNavbar from "./EventNavbar";
import { Search } from "lucide-react";
import { AddSquare, Notification } from "iconsax-react";
import ProfileModal from "../ProfileModal";
import SearchModal from "../SearchModal";
import { useDispatch, useSelector } from "react-redux";

import { getUserProfile } from "../../api/userApi";
import { setUser } from "../../redux/authSlice";
import AvatarFallback from "../AvatarFallback";

const EventHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { token, user_id, name, email, googleId, profileImage } = useSelector(
    (state) => state.auth,
  );

  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);

  const userData = {
    name,
    token,
    email,
    user_id,
    googleId,
    imageUrl: profileImage,
  };

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        // console.log("Profile Data:", data);

        setUserProfile(data.user);
        setProfileDetails(data.profile);

        if (data.profile && data.profile.profile_image) {
          const fullImageUrl = `https://api.centrl.ng/uploads/profiles/${data.profile.profile_image}`;

          dispatch(
            setUser({
              token,
              user_id,
              name,
              email,
              googleId,
              profileImage: fullImageUrl,
            }),
          );
        }
      } catch (err) {
        setError("Failed to fetch user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, dispatch, user_id, name, email, googleId]);

  // Check if user is authenticated
  const isAuthenticated = !!token;

  return (
    <>
      <header className="via-neutral-100/50 supports-[backdrop-filter]:bg-white/3 fixed top-0 z-[500] w-full bg-gradient-to-r from-white/50 to-white/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1290px] items-center justify-between p-4 2xl:max-w-[1500px]">
          <div className="flex items-center gap-20 xl:gap-32 2xl:gap-[12rem]">
            {/* Logo */}
            <Link to="/events">
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
              {isAuthenticated ? (
                /* Show these elements only when user is logged in */
                <>
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
                      {userData.imageUrl ? (
                        <img
                          alt={userData.name}
                          src={userData.imageUrl}
                          className="size-9 rounded-full object-cover"
                        />
                      ) : (
                        <AvatarFallback
                          name={userData.name || "User"}
                          size="md"
                          className="size-9"
                        />
                      )}
                      {isOpen && (
                        <ProfileModal
                          isOpen={isOpen}
                          onClose={() => setIsOpen(false)}
                          user={userData}
                        />
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="hidden text-50 font-500 text-foreground md:block">
                    {new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                  <Link
                    className="shadow-xs ml-4 inline-flex items-center justify-center rounded-[13px] border border-[#000]/15 px-4 py-2 text-50 font-500 text-foreground duration-300 ease-in hover:bg-black hover:text-white"
                    to={"/sign-up"}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Sign In
                  </Link>
                </div>
              )}
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
