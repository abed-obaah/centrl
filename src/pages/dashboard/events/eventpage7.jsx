import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import location from "../../../assets/navigation-2.svg";
import bg from "../../../assets/bg.png";
import Maps from "../../../assets/maps.png";
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

const EventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user_id);

  if (!userId) {
    throw new Error("User not found");
  }

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await getEvent(id, token);
        setEventData(response.data);
      } catch (err) {
        setError("Failed to fetch eventData data");
        console.error("Error fetching eventData:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
      setIsModalOpen(true);
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

  return (
    <div className="flex w-full items-center justify-center bg-[#FEF6D5] px-4 py-8 text-black">
      <div className="mt-28 w-full max-w-[900px] md:flex md:justify-between md:gap-6">
        {/* Event Image & Title */}
        <div className="flex flex-col items-center">
          {eventData.video && (
            <video
              className="h-[286px] w-full rounded-lg object-cover lg:h-[286px] lg:w-[283px]"
              loop
              autoPlay
              muted
              ref={videoRef}
              src={eventData.video}
            ></video>
          )}
          <div className="hidden md:block">
            <Image
              src={eventData.banner_image}
              alt={eventData.event_title}
              width={283}
              height={283}
              className="mt-5 size-[283px] rounded-lg"
            />
          </div>
          <div className="hidden md:block">
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

        <div className="mt-8 flex flex-col md:mt-0">
          <h1 className="text-500 font-bold capitalize md:mb-4 md:text-800">
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
              {eventData.event_link !== "null" && (
                <MeetingLink url={eventData.event_link} />
              )}

              {eventData.location !== "null" && (
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
                {!eventData.image === "null" ? (
                  <Image
                    src={eventData.image}
                    alt="Event"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  getInitialsAvatar(eventData.name, eventData.email, 32)
                )}
                {/* <p className="text-100 text-black ">{eventData.name}</p> */}
                {!userId ? (
                  <div>
                    <img src={Logo} alt="Centrl" />
                    <button onClick={handleGoogleLogin}>
                      Sign In / Click the button below to register
                    </button>
                  </div>
                ) : (
                  <p className="text-50 font-500 text-black">
                    {eventData.email}
                  </p>
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
                  to={isEventCreator ? "/customize" : "#"}
                  onClick={handleClick}
                  className={
                    isEventCreator
                      ? "mt-3 w-full rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] py-2 text-white"
                      : "mt-3 w-full rounded-lg bg-primary py-2 text-white"
                  }
                >
                  {isEventCreator ? "Manage Event" : "Click to Register"}
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

          <div className="mt-20 w-full max-w-[550px]">
            <h2 className="border-b-gray border-b pb-10 text-50 font-500">
              About Event
            </h2>
            <p className="whitespace-pre-line pt-10">{eventData.about}</p>
          </div>

          <div className="mt-10 flex w-full justify-between space-x-8">
            <div className="h-64 w-96 rounded-2xl border-[1.5px] border-[#cfb8b6] p-4">
              <h1 className="text-100 font-400 text-black">Location</h1>
              <img
                src={Maps}
                alt="Event"
                className="mt-10 h-40 w-full rounded-lg object-cover"
              />
            </div>

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
    </div>
  );
};

export default EventPage;
