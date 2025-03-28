import { SearchNormal1 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getEvents } from "../api/eventApi";
import { Spinner } from "./Spinner";
import MeetingLink from "./MeetingLink";
import Image from "./Image";

const SearchModal = ({ modalVisible, setModalVisible }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      fetchEvents();
    }
  }, [modalVisible]);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await getEvents(token);
      setEvents(response.data || []);
      setFilteredEvents(response.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredEvents(events);
      return;
    }

    const filtered = events.filter((event) =>
      event.event_title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredEvents(filtered);
  };

  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={() => setModalVisible(false)}
      />
      <div className="z-[800] w-full max-w-lg overflow-hidden rounded-lg bg-background shadow-lg">
        <div className="flex h-[60vh] flex-col">
          <div className="flex-shrink-0">
            <div className="flex items-center bg-white px-4 py-5">
              <input
                type="text"
                placeholder="Search for Events, calendars and more"
                className="bg-transparent w-full outline-none"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
              <SearchNormal1 size="20" className="text-gray-500 mx-2" />
            </div>
            <h2 className="text-gray-700 font-5000 text-sm mt-4 px-4">
              {searchQuery
                ? "Search Results"
                : "Centrl. Top Events and Profiles"}
            </h2>
          </div>

          {/* Event List */}
          <div className="mt-3 flex-1 overflow-y-auto px-6 pb-4">
            {isLoading ? (
              <div className="flex justify-center py-4">
                <Spinner text={"Loading events..."} />
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="flex justify-center py-4">
                <p>No events found</p>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="hover:bg-gray-100 flex cursor-pointer items-center gap-3 rounded-md p-2"
                  onClick={() => {
                    navigate(`/event/${event.id}`);
                    setModalVisible(false);
                  }}
                >
                  <Image
                    src={event.banner_image || "/placeholder.svg"}
                    alt={event.event_title}
                    width={40}
                    height={40}
                    className="size-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-500 capitalize">
                      {event.event_title}
                    </p>
                    {event.event_link !== "null" && (
                      <div className="inline-block">
                        <MeetingLink url={event.event_link} />
                      </div>
                    )}

                    {event.location !== "null" && (
                      <p className="text-gray-400 capitalize">
                        {event.location}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
