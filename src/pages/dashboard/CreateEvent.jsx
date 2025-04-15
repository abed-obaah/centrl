import { useState } from "react";
import { useSelector } from "react-redux";
import Map from "../../assets/map.png";
import Upload from "../../assets/upload.png";
import Indicator from "../../assets/indicator.png";
import userImage from "../../assets/user.png";
import bgGradient from "../../assets/gradient.png";
import MoreOptions from "../../components/MoreOptions";
import SideModal from "../../components/SidebarModal";
import DescriptionModal from "../../components/DescriptionModal";
import { createEvent } from "../../api/eventApi";
import { Spinner } from "../../components/Spinner";
import { Link, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const defaultEventData = {
  event_title: "",
  event_category: "",
  start_date: "",
  start_time: "",
  event_type: "public",
  event_link: "",
  location: "",
  location_type: "virtual",
  latitude: null,
  longitude: null,
  about: "",
  ticket_type: "Free",
  ticket_price_basic: 0,
  ticket_price_diamond: 0,
  // ticket_price: 0,
  require_approval: false,
  capacity: "Unlimited",
  collaborators: [],
  language: "English",
};

export default function CreateEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSide, setIsOpenSide] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [eventData, setEventData] = useState({ ...defaultEventData });
  const [customCategory, setCustomCategory] = useState("");

  // File state
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(bgGradient);
  const [videoFile, setVideoFile] = useState(null);
  const [videoName, setVideoName] = useState("Upload Video");

  const roles = [
    "Business",
    "Party",
    "Technology",
    "Concert",
    "Education",
    "Gaming & Sport",
    "Wellbeing",
    "Others",
  ];

  const userId = useSelector((state) => state.auth.user_id);

  const { token, name, email, profileImage } = useSelector(
    (state) => state.auth,
  );

  const isFormComplete = () => {
    const requiredFields = [
      eventData.event_title,
      bannerImage,
      eventData.start_date,
      eventData.start_time,
      eventData.about,
      eventData.event_category,
    ];

    if (eventData.location_type === "virtual" && !eventData.event_link) {
      return false;
    }
    if (eventData.location_type === "in-person" && !eventData.location) {
      return false;
    }

    return requiredFields.every((field) => field);
  };

  const geocodeAddress = async (address) => {
    try {
      // Option 1: Using OpenCage Geocoding API (you'll need an API key)
      const apiKey = "f6a3d37b33b3483998a415ba4a4ef6ca"; // Replace with your API key
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`,
      );
      const data = await response.json();

      // console.log("opencage api", data);

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { latitude: lat, longitude: lng };
      }

      return { latitude: null, longitude: null };
    } catch (error) {
      console.error("Error geocoding address:", error);
      return { latitude: null, longitude: null };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });

    // If the location field changed and it's in-person event, geocode it
    if (
      name === "location" &&
      eventData.location_type === "in-person" &&
      value
    ) {
      clearTimeout(window.geocodeTimer);
      window.geocodeTimer = setTimeout(async () => {
        const { latitude, longitude } = await geocodeAddress(value);
        setEventData((prev) => ({ ...prev, latitude, longitude }));
        console.log(
          `Geocoded "${value}" to: lat ${latitude}, lng ${longitude}`,
        );
      }, 1000);
    }
  };

  const handleBannerUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBannerImage(file);
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const sanitizeFilename = (filename) => {
    return filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10 MB. Please upload a smaller file.");
      return;
    }

    if (file) {
      const sanitizedFilename = sanitizeFilename(file.name);
      setVideoFile(file);
      setVideoName(sanitizedFilename);
    }
  };

  const handleRoleSelect = (option) => {
    setEventData({
      ...eventData,
      event_category: option,
    });
    setIsOpen(false);
  };

  const handleLocationTypeChange = (type) => {
    setEventData({
      ...eventData,
      location_type: type,
      ...(type === "virtual" ? { location: "" } : { event_link: "" }),
    });
  };

  const setDescription = (about) => {
    setEventData((prevData) => ({
      ...prevData,
      about,
    }));
  };

  // Handle option changes from MoreOptions component
  const handleOptionChange = (option, value) => {
    setEventData((prevData) => ({
      ...prevData,
      [option]: value,
    }));
  };

  const validateForm = () => {
    if (!eventData.event_title) {
      setError("Event title is required");
      return false;
    }

    if (!bannerImage) {
      setError("Banner image is required");
      return false;
    }

    if (eventData.location_type === "virtual" && !eventData.event_link) {
      setError("Meeting link is required for virtual events");
      return false;
    }

    if (eventData.location_type === "in-person" && !eventData.location) {
      setError("Location address is required for in-person events");
      return false;
    }

    setError("");
    return true;
  };

  const prepareEventData = () => {
    const startDateTime = `${eventData.start_date}T${eventData.start_time}:00`;

    const finalCategory =
      eventData.event_category === "Others"
        ? customCategory
        : eventData.event_category;

    return {
      user_id: userId,
      name: name,
      email: email,
      image: profileImage,
      event_title: eventData.event_title,
      start_time: startDateTime,
      event_type: eventData.event_type === "public" ? "public" : "Private",
      event_link: eventData.event_link || null,
      location: eventData.location || null,
      latitude: eventData.latitude || null,
      longitude: eventData.longitude || null,
      about: eventData.about,
      event_category: finalCategory,
      ticket_type: eventData.ticket_type || "Free",
      ticket_price_basic: eventData.ticket_price_basic || 0.0,
      ticket_price_diamond: eventData.ticket_price_diamond || 0.0,
      // ticket_price: eventData.ticket_price || 0.0,
      require_approval: eventData.require_approval ? 1 : 0,
      capacity:
        eventData.capacity === "Unlimited"
          ? 0
          : parseInt(eventData.capacity, 10) || 0,
      collaborators: eventData.collaborators || [],
      language: eventData.language,
      video: null,
      banner_image: null,
      background_image: null,
      background_color: null,
    };
  };

  const resetForm = () => {
    setEventData({ ...defaultEventData });
    setBannerImage(null);
    setBannerPreview(bgGradient);
    setVideoFile(null);
    setVideoName("Upload Video");
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!userId) {
      setError("You must be logged in to create an event");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const fullEventData = prepareEventData();

      // console.log("full event data:", fullEventData);

      const response = await createEvent(
        fullEventData,
        bannerImage,
        videoFile,
        token,
      );

      // console.log("Event created:", response);
      setSuccess(true);
      resetForm();

      // Navigate to the new event page
      navigate(`/event/${response.data.id}`);
    } catch (error) {
      console.error("Failed to create event:", error);

      setError(
        error.response?.data?.message ||
          "Failed to create event. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const MapPreview = ({ latitude, longitude }) => {
    if (!latitude || !longitude) return null;

    return (
      <div className="mb-4 mt-2">
        <p className="mb-1 text-sm text-gray-500">Location preview:</p>
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

  return (
    <>
      <div className="mb-20 mt-20 px-4 md:px-0">
        <div className="container">
          {error && (
            <div className="mb-4 rounded-md bg-[red] p-4 text-red-700 text-white">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 rounded-md bg-[green] p-4 text-green-700 text-white">
              Event created successfully!
            </div>
          )}
        </div>

        <form onSubmit={handleCreateEvent}>
          <div className="mx-auto max-w-[800px] md:grid md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="md:sticky md:top-28">
              <div className="md:mx-auto md:max-w-[300px]">
                <div className="mt-2">
                  <div
                    onClick={() => setIsOpenSide(true)}
                    className="flex w-full cursor-pointer space-x-4 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <img src={Map} alt="" className="h-10 w-8 object-contain" />

                    <div className="">
                      <p>Theme</p>
                      <p className="font-semibold text-[#000000]">Minimalist</p>
                    </div>
                  </div>
                  <label
                    htmlFor="videoUpload"
                    className="mt-5 flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-md bg-white px-3 py-3 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
                  >
                    <div>
                      <p className="truncate">{videoName}</p>
                    </div>

                    <img
                      src={Upload}
                      alt="Upload"
                      className="h-10 w-8 object-contain"
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
                      backgroundImage: `url(${bannerPreview})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="relative mt-5 flex h-64 w-full items-end justify-between rounded-xl px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  >
                    <div className="mt-10 items-end">
                      <p className="mt-10"></p>
                    </div>

                    {/* Upload button */}
                    <label htmlFor="bannerUpload" className="cursor-pointer">
                      <img
                        src={Upload}
                        alt="Upload"
                        className="h-10 w-8 object-contain"
                      />
                    </label>
                    <input
                      id="bannerUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleBannerUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-[800px] md:mt-0">
              <div className="mb-10">
                <label
                  htmlFor="last-name"
                  className="mb-2 block font-500 text-black"
                >
                  Event Title
                </label>
                <input
                  id="name-event"
                  name="event_title"
                  type="text"
                  value={eventData.event_title}
                  onChange={handleInputChange}
                  placeholder="Name your event"
                  className="w-full rounded-lg bg-white px-4 py-3 outline-none placeholder:text-[#000]/70"
                />
              </div>

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <p className="font-500">Start</p>
                  <div className="flex items-center gap-2">
                    <input
                      id="start_date"
                      name="start_date"
                      type="date"
                      value={eventData.start_date}
                      onChange={handleInputChange}
                      className="w-40 rounded-xl bg-white p-3 outline-none"
                    />

                    <div className="relative">
                      <input
                        id="start_time"
                        name="start_time"
                        type="time"
                        value={eventData.start_time}
                        onChange={handleInputChange}
                        step="3600"
                        className="w-40 rounded-xl bg-white p-3 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setEventData((prevData) => ({
                      ...prevData,
                      event_type:
                        prevData.event_type === "public" ? "private" : "public",
                    }))
                  }
                  className={`rounded-md ${eventData.event_type === "public" ? "bg-white" : "bg-white"} px-6 py-1.5 font-500 text-black`}
                >
                  {eventData.event_type === "public" ? "Public" : "Private"}
                </button>
              </div>

              <div className="mb-4">
                <p className="mb-2 font-500 text-black">Location</p>
                <div className="flex items-center gap-6">
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => handleLocationTypeChange("virtual")}
                  >
                    <div
                      className={`flex items-center gap-4 rounded-xl ${eventData.location_type === "virtual" ? "bg-white ring-2 ring-blue-200" : "bg-white"} px-2 py-2`}
                    >
                      <img
                        src={Indicator || "/placeholder.svg"}
                        alt="icon"
                        className="size-8"
                      />
                      <p className="font-600 text-black">Virtual</p>
                    </div>
                  </div>
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => handleLocationTypeChange("in-person")}
                  >
                    <div
                      className={`flex items-center gap-4 rounded-xl ${eventData.location_type === "in-person" ? "bg-white ring-2 ring-blue-200" : "bg-white"} px-2 py-2`}
                    >
                      <img
                        src={userImage || "/placeholder.svg"}
                        alt="icon"
                        className="size-8"
                      />
                      <p className="font-600 text-black">In Person</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Location Input */}
              {eventData.location_type === "virtual" && (
                <div className="mb-10 mt-4">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Link className="h-5 w-5" />
                    </div>
                    <input
                      type="url"
                      name="event_link"
                      value={eventData.event_link}
                      onChange={handleInputChange}
                      placeholder="Enter meeting link (Zoom, Google Meet, etc.)"
                      className="w-full rounded-lg bg-white py-3 pl-10 pr-4 outline-none placeholder:text-[#000]/70"
                    />
                  </div>
                </div>
              )}

              {/* In-Person Location Input */}
              {eventData.location_type === "in-person" && (
                <div className="mb-10 mt-4">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={eventData.location}
                      onChange={handleInputChange}
                      placeholder="Enter physical address"
                      className="w-full rounded-lg bg-white py-3 pl-10 pr-4 outline-none placeholder:text-[#000]/70"
                    />
                  </div>

                  <MapPreview
                    latitude={eventData.latitude}
                    longitude={eventData.longitude}
                  />
                </div>
              )}

              <div className="mb-10">
                <label htmlFor="email" className="block font-500">
                  About
                </label>
                <div
                  className="mt-2"
                  onClick={() => setIsDescriptionModalOpen(true)}
                >
                  <input
                    id="Description"
                    name="about"
                    type="text"
                    readOnly
                    value={
                      eventData.about
                        ? `${eventData.about.substring(0, 30)}...`
                        : ""
                    }
                    placeholder="Description..."
                    className="w-full rounded-lg bg-white px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="mb-2 block font-500">Event Category</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full rounded-lg bg-white px-4 py-3 text-left text-[#000]/70 outline-none"
                >
                  <span
                    className={
                      eventData.event_category
                        ? "text-gray-900"
                        : "text-gray-400"
                    }
                  >
                    {eventData.event_category || "None Selected"}
                  </span>
                </button>

                {isOpen && (
                  <div className="absolute left-0 right-0 top-full z-10 mt-1 h-[200px] overflow-y-auto rounded-xl border border-primary bg-[#fff] pb-4 shadow-xl">
                    {roles.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRoleSelect(option)}
                        className="w-full px-4 py-2 text-left transition first:rounded-t-xl last:rounded-b-xl hover:bg-pink-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {eventData.event_category === "Others" && (
                <div className="my-6">
                  <label className="mb-2 block font-500">Custom Category</label>
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="Enter your custom category"
                    className="w-full rounded-lg bg-white px-4 py-3 outline-none placeholder:text-[#000]/70"
                  />
                </div>
              )}

              <MoreOptions
                eventData={eventData}
                onOptionChange={handleOptionChange}
              />

              <button
                type="submit"
                disabled={!isFormComplete() || loading}
                className={`mt-5 w-40 rounded-xl bg-primary py-2 text-white ${
                  !isFormComplete() ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {loading ? <Spinner text="Creating Event" /> : "Create Event"}
              </button>
            </div>
          </div>
        </form>
        <DescriptionModal
          isOpen={isDescriptionModalOpen}
          description={eventData.about}
          onSave={setDescription}
          onClose={() => setIsDescriptionModalOpen(false)}
        />
        <SideModal isOpen={isOpenSide} onClose={() => setIsOpenSide(false)} />
      </div>
    </>
  );
}
