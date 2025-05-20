import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import location from "../../../assets/navigation-2.svg";
import bg from "../../../assets/bg.png";
import Verified from "../../../assets/verified-small.png";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { getEvent } from "../../../api/eventApi";
import MeetingLink from "../../../components/MeetingLink";
import Image from "../../../components/Image";
import CheckoutModal from "../../../components/checkout/checkout-modal";
import { Share2 } from "lucide-react";
import PlanImg from "../../../assets/pricing-card.svg";
import Logo from "../../../assets/event-details-logo.svg";
import { useFetch } from "../../../hooks/useFetch";
import { Spinner } from "../../../components/Spinner";
import FreeRegistrationModal from "../../../components/checkout/free-registration-modal";
import { getRegisteredUsers } from "../../../api/freeRegApi";

const EventPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const {
    user_id: userId,
    email,
    profileImage,
    name,
  } = useSelector((state) => state.auth);

  const [registrationCount, setRegistrationCount] = useState(0);
  const [isFreeRegModalOpen, setIsFreeRegModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const {
    data: eventData,
    isLoading,
    isError,
    error,
  } = useFetch({
    queryKey: ["event", id],
    fetcher: () => getEvent(id),
    dataPath: "data",
  });

  const {
    data: registeredUsers,
    isLoading: isLoadingRegisteredUsers,
    isError: isErrorRegisteredUsers,
  } = useFetch({
    queryKey: ["registered-users", id],
    fetcher: getRegisteredUsers,
    dataPath: null,
  });

  useEffect(() => {
    if (registeredUsers) {
      setRegistrationCount(registeredUsers.count || 0);
    }
  }, [registeredUsers]);

  const handleVideoRef = (ref) => {
    if (ref) {
      videoRef.current = ref;
      // Only try to autoplay on desktop
      if (!window.matchMedia("(max-width: 768px)").matches) {
        ref.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      } else {
        ref.load();
        ref.pause();
      }
    }
  };

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (isError)
    return <div>Error: {error?.message || "Failed to fetch event data"}</div>;
  if (!eventData) return <div>Event not found</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "EEEE, MMMM d");
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "h:mm a");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeFreeRegModal = () => {
    setIsFreeRegModalOpen(false);
  };

  const getInitialsAvatar = (name, email, size = 48) => {
    // Handle undefined/null cases
    if (!name && !email) {
      name = "U";
    }

    // Use name if available, otherwise use first part of email
    let text = "";
    if (name) {
      const nameParts = name.trim().split(" ");
      text = nameParts
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    } else if (email) {
      text = email.split("@")[0][0].toUpperCase();
    } else {
      text = "U";
    }

    text = text.substring(0, 2);

    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#F3FF33",
      "#FF33F3",
      "#33FFF3",
      "#FF8C33",
      "#8C33FF",
      "#33FF8C",
      "#FF338C",
    ];
    const color = colors[text.charCodeAt(0) % colors.length];

    return (
      <div
        className={`flex items-center justify-center rounded-full font-bold text-white`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          fontSize: `${size / 2}px`,
        }}
      >
        {text}
      </div>
    );
  };

  const isEventCreator = String(userId) === String(eventData.user_id);

  const handleClick = (e) => {
    if (!isEventCreator) {
      e.preventDefault();

      const isFreeEvent =
        (Number.parseFloat(eventData.ticket_price) === 0 ||
          eventData.ticket_type === "free") &&
        Number.parseFloat(eventData.ticket_price_basic) === 0 &&
        Number.parseFloat(eventData.ticket_price_diamond) === 0;

      if (isFreeEvent) {
        setRegistrationSuccess(false);
        setIsRegistering(false);
        setIsFreeRegModalOpen(true);
      } else {
        setIsModalOpen(true);
      }
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: eventData.event_title,
          text: `Check out this event: ${eventData.event_title}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support navigator.share
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://api.centrl.ng/google_callback.php";
  };

  const renderRegistrationCount = () => {
    if (isLoadingRegisteredUsers) {
      return <Spinner size="small" />;
    }

    if (isErrorRegisteredUsers) {
      return <p className="text-left text-50 font-500">0 Going</p>;
    }

    return (
      <p className="text-left text-50 font-500">
        {registrationCount} {registrationCount === 1 ? "Person" : "People"}{" "}
        Going
      </p>
    );
  };

  const MapPreview = ({ latitude, longitude }) => {
    if (!latitude || !longitude) return null;

    return (
      <div className="mb-4 mt-2 w-full">
        <p className="mb-2 text-100 font-500 text-black md:text-200">
          Location
        </p>
        <iframe
          title="Location Map"
          width="100%"
          height="200"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&marker=${latitude},${longitude}`}
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>
    );
  };

  const renderAttendeeAvatars = () => {
    if (isLoadingRegisteredUsers) {
      return (
        <div className="flex -space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 w-6 rounded-full bg-gray-200"></div>
          ))}
        </div>
      );
    }

    if (!registeredUsers || registeredUsers.count === 0) {
      return <p className="text-sm text-gray-500">Be the first to register!</p>;
    }

    return (
      <div className="flex -space-x-1">
        {registeredUsers.records.slice(0, 4).map((user, index) => (
          <div key={index} className="h-6 w-6 rounded-full bg-gray-200">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                {user.first_name
                  ? user.first_name.charAt(0).toUpperCase()
                  : "U"}
              </div>
            )}
          </div>
        ))}
        {registeredUsers.count > 4 && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs">
            +{registeredUsers.count - 4}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex w-full items-center justify-center bg-[#FEF6D5] px-4 py-8 text-black">
      <div className="mt-12 w-full max-w-[900px] md:grid md:grid-cols-[1fr_2fr] md:gap-6">
        {/* Event Image & Title */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6 hidden w-full md:block">
            {eventData.video && (
              <video
                className="h-[286px] w-full rounded-lg object-cover lg:h-[286px] lg:w-[283px]"
                loop
                autoPlay
                muted
                ref={handleVideoRef}
                src={eventData.video}
              ></video>
            )}
          </div>

          <Image
            className="size-[286px] rounded-lg object-cover"
            src={eventData.banner_image}
            alt={eventData.event_title}
          />

          <div className="hidden w-full md:block">
            <h2 className="mt-6 text-left text-50 font-500">Hosted by</h2>
            <div className="mt-6 flex items-center space-x-3">
              {!eventData.image === "null" ? (
                <Image
                  src={eventData.image}
                  alt={eventData.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                getInitialsAvatar(eventData.name, eventData.email, 32)
              )}

              <div className="flex items-center space-x-3">
                <p className="text-left text-50 font-500 capitalize">
                  {eventData.name}
                </p>
                <img
                  src={Verified}
                  alt="Event"
                  className="h-4 w-4 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex w-full flex-wrap justify-between gap-2">
              {renderAttendeeAvatars()} {renderRegistrationCount()}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:mt-0">
          <h1 className="text-500 font-semibold capitalize md:mb-4 md:text-800">
            {eventData.event_title}
          </h1>
          <div className="flex items-center md:gap-4">
            <div
              className="relative hidden h-20 w-20 md:flex md:items-center md:justify-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img src={location} alt="Event" className="size-8 rounded-md" />
            </div>
            <div>
              <p className="font-medium text-black">
                {formatDate(eventData.start_time)}
              </p>
              <p className="font-medium text-black">
                {formatTime(eventData.start_time)} -{" "}
                {formatDate(eventData.end_time || eventData.start_time)},{" "}
              </p>

              {eventData.event_link && eventData.event_link !== "null" && (
                <MeetingLink url={eventData.event_link} />
              )}

              {eventData.location && eventData.location !== "null" && (
                <p className="font-medium capitalize text-black">
                  {eventData.location}
                </p>
              )}
            </div>
          </div>

          <div className="pb-10">
            <button
              onClick={handleShare}
              className="ml:ml-2 mt-3 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-black transition-colors hover:bg-gray-100"
            >
              <Share2 size={16} />
            </button>
          </div>

          <hr className="pt-10 text-200 md:hidden" />

          {/* Registration Card */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 pb-3">
            <div className="">
              <div className="flex items-center justify-between rounded-tl-[23px] rounded-tr-[23px] bg-white/55">
                <p className="text-100 font-600">Registration</p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                {!userId ? (
                  <div className="flex items-center gap-4">
                    <img src={Logo} alt="Centrl" />
                    <button onClick={handleGoogleLogin}>
                      Sign In / Click the button below to register
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    {!profileImage ? (
                      getInitialsAvatar(name, email, 32)
                    ) : (
                      <Image
                        src={profileImage}
                        alt="Event"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    )}

                    <p className="text-50 font-500 text-black">{email}</p>
                  </div>
                )}
              </div>

              <div className="mt-2">
                <div className="flex items-center gap-4">
                  <img src={PlanImg} alt="card" />
                  <p className="text-100 text-black">Pricing</p>
                </div>

                <div className="mt-1 pl-12">
                  {parseFloat(eventData.ticket_price_basic) === 0 &&
                  parseFloat(eventData.ticket_price_diamond) === 0 ? (
                    <p className="text-100 font-500 text-black">Free</p>
                  ) : (
                    <div className="flex flex-col">
                      <p className="text-100 font-500 text-black">
                        Basic:{" "}
                        {Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          maximumFractionDigits: 0,
                        }).format(eventData.ticket_price_basic)}
                      </p>
                      <p className="text-100 font-500 text-black">
                        Diamond:{" "}
                        {Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          maximumFractionDigits: 0,
                        }).format(eventData.ticket_price_diamond)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-center text-center">
                <Link
                  to={isEventCreator ? `/overview/${eventData.id}` : "#"}
                  onClick={handleClick}
                  className={
                    isEventCreator
                      ? "mt-3 w-full rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] py-2 text-white"
                      : registrationSuccess
                        ? "mt-3 w-full cursor-not-allowed rounded-lg bg-green-500 py-2 text-white opacity-50"
                        : "mt-3 w-full rounded-lg bg-primary py-2 text-white"
                  }
                  disabled={registrationSuccess}
                >
                  {isEventCreator
                    ? "Manage Event"
                    : registrationSuccess
                      ? "Registered Successfully"
                      : "Click to Register"}
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:hidden">
            <h2 className="mt-6 w-80 text-left text-50 font-500">Hosted by</h2>
            <div className="mt-6 flex items-center space-x-3">
              {!eventData.image === "null" ? (
                <Image
                  src={eventData.image}
                  alt={eventData.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                getInitialsAvatar(eventData.name, eventData.email, 32)
              )}

              <div className="flex items-center space-x-3">
                <p className="text-left text-50 font-500 capitalize">
                  {eventData.name}
                </p>
                <img
                  src={Verified}
                  alt="Event"
                  className="h-4 w-4 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              {renderAttendeeAvatars()}
              {renderRegistrationCount()}
            </div>
          </div>

          <div className="mt-20 w-full max-w-[550px]">
            <h2 className="border-b-gray border-b pb-5 text-50 font-500">
              About Event
            </h2>
            <p className="whitespace-pre-line pt-5">{eventData.about}</p>
          </div>

          <div className="mt-10 flex w-full justify-between space-x-4">
            <MapPreview
              latitude={Number(eventData.latitude)}
              longitude={Number(eventData.longitude)}
            />

            <div className="relative hidden h-64 w-40 overflow-hidden rounded-2xl lg:block">
              <img
                src={eventData.banner_image}
                alt={eventData.event_title}
                className="h-64 rounded-[23px] object-cover p-1"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CheckoutModal
          isOpen={isModalOpen}
          onClose={closeModal}
          eventData={eventData}
        />
      )}

      {/* free reg modal*/}
      {isFreeRegModalOpen && (
        <FreeRegistrationModal
          isOpen={isFreeRegModalOpen}
          onClose={closeFreeRegModal}
          isRegistering={isRegistering}
          registrationSuccess={registrationSuccess}
          eventData={eventData}
          setIsRegistering={setIsRegistering}
          setRegistrationSuccess={setRegistrationSuccess}
        />
      )}
    </div>
  );
};

export default EventPage;
