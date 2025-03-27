import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import location from "../../../assets/navigation-2.svg";
import bg from "../../../assets/bg.png";
import Maps from "../../../assets/maps.png";
import RegisterEventBg from "../../../assets/registerEventBg.png";
import face from "../../../assets/face.png";
import Verified from "../../../assets/verified-small.png";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { getEvent } from "../../../api/eventApi";
import MeetingLink from "../../../components/MeetingLink";

const EventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
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

  // console.log("eventData", eventData);

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

  console.log("userId", userId);
  console.log("eventId", eventData.user_id);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEF6D5] p-8 text-black">
      <div className="mt-28 flex w-full max-w-[900px] flex-col justify-center space-x-10 md:flex-row">
        {/* Event Image & Title */}
        <div className="flex flex-col items-center">
          {eventData.video && (
            <video
              className="h-[286px] w-[283px] rounded-lg object-cover"
              loop
              autoPlay
              muted
              ref={videoRef}
              controls
              src={eventData.video}
            ></video>
          )}
          <div>
            <img
              src={eventData.banner_image}
              alt={eventData.event_title}
              className="mt-5 h-[286px] w-[283px] rounded-lg object-cover"
            />
          </div>
          <div className="w-full">
            <h2 className="mt-6 w-80 text-left text-50 font-500">Hosted by</h2>
            <div className="mt-6 flex items-center space-x-3">
              <img
                src={eventData.banner_image}
                alt={eventData.event_title}
                className="h-12 w-12 rounded-lg object-cover"
              />

              <div className="flex items-center space-x-3">
                <p className="text-left text-50 font-500 capitalize">
                  {eventData.event_title}
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

        <div className="flex flex-col text-left md:text-left">
          <h1 className="font-bold text-800 capitalize">
            {eventData.event_title}
          </h1>
          <div className="flex items-center space-x-3 pt-10">
            <div
              className="relative flex h-20 w-20 items-center justify-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img src={location} alt="Event" className="size-8 rounded-md" />
            </div>
            <div className="px-1">
              <p className="text-gray-300">
                {formatDate(eventData.start_time)}
              </p>
              <p className="text-gray-300">
                {formatTime(eventData.start_time)} -{" "}
                {formatDate(eventData.end_time || eventData.start_time)},{" "}
              </p>
              {eventData.event_link !== "null" && (
                <MeetingLink url={eventData.event_link} />
              )}

              {eventData.location !== "null" && (
                <p className="text-gray-400 capitalize">{eventData.location}</p>
              )}
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
                <p className="text-100 text-black">Akpor</p>
                <div className="h-1 w-1 rounded-full bg-black"></div>
                <p className="text-50 text-black">Favourakpor2017@gmail.com</p>
              </div>
              <div className="mt-5 flex items-center space-x-3 px-9">
                <p className="text-100 text-black">Price:</p>
                <p className="text-200 font-500 text-black">
                  <span> </span>
                  {eventData.ticket_price === 0 ||
                  eventData.ticket_price === "0.00"
                    ? "Free"
                    : Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        maximumFractionDigits: 0,
                      }).format(eventData.ticket_price)}
                </p>
              </div>
              <div className="mt-4 flex justify-center text-center">
                <Link
                  to={
                    String(userId) === String(eventData.user_id)
                      ? "/customize"
                      : `/register/${eventData.id}`
                  }
                  className={
                    String(userId) === String(eventData.user_id)
                      ? "mt-3 w-[450px] rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] py-2 text-white"
                      : "mt-3 w-[450px] rounded-lg bg-primary py-2 text-white"
                  }
                >
                  {String(userId) === String(eventData.user_id)
                    ? "Manage Event"
                    : "Click to Register"}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full max-w-[550px]">
            <h2 className="border-b-gray border-b pb-10 text-50 font-500">
              About Event
            </h2>
            <p className="whitespace-pre-line pt-10">{eventData.about}</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
