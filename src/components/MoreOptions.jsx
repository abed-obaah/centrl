import optionsImage from "../assets/optionsImage.png";
import { useEffect, useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import { Pencil, X, ChevronDown, Plus } from "lucide-react";

const itemsData = [
  {
    id: 1,
    label: "Tickets",
    value: "Free",
    editable: true,
    key: "ticket_type",
    image: optionsImage,
  },
  {
    id: 3,
    label: "Require Approval",
    type: "toggle",
    key: "require_approval",
    image: optionsImage,
  },
  {
    id: 4,
    label: "Capacity",
    value: "Unlimited",
    editable: true,
    key: "capacity",
    image: optionsImage,
  },
  {
    id: 5,
    label: "Add Collaborator",
    value: "Add",
    action: "collaborator",
    image: optionsImage,
  },
  {
    id: 6,
    label: "Language",
    value: "Add",
    action: "language",
    image: optionsImage,
  },
];

// List of common languages
const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
];

// Ticket types
const ticketTypes = ["Basic", "Diamond", "VIP"];

export default function MoreOptions({ eventData, onOptionChange }) {
  const [toggleStates, setToggleStates] = useState({});
  const [showCollaboratorModal, setShowCollaboratorModal] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [collaboratorEmail, setCollaboratorEmail] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    eventData.language || "English",
  );

  // Ticket state
  const [ticketValue, setTicketValue] = useState(
    eventData.ticket_type || "Free",
  );
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketPrices, setTicketPrices] = useState({
    Basic: eventData.ticket_price || 0,
    Diamond: eventData.ticket_price || 0,
    VIP: eventData.ticket_price || 0,
  });

  const [capacityValue, setCapacityValue] = useState(
    eventData.capacity && eventData.capacity > 0 ? "Limited" : "Unlimited",
  );
  const [capacityNumber, setCapacityNumber] = useState(
    eventData.capacity && eventData.capacity > 0 ? eventData.capacity : 100,
  );
  const [showCapacityModal, setShowCapacityModal] = useState(false);

  const languageDropdownRef = useRef(null);
  const ticketModalRef = useRef(null);
  const capacityModalRef = useRef(null);

  useEffect(() => {
    const newToggleStates = {};
    itemsData.forEach((item) => {
      if (item.type === "toggle" && item.key) {
        newToggleStates[item.id] = eventData[item.key] || false;
      }
    });
    setToggleStates(newToggleStates);

    // Initialize collaborators if they exist in eventData
    if (eventData.collaborators && eventData.collaborators.length > 0) {
      setCollaborators(eventData.collaborators);
    }

    // Initialize language if it exists in eventData
    if (eventData.language) {
      setSelectedLanguage(eventData.language);
    }

    // Initialize ticket value
    setTicketValue(eventData.ticket_type || "Free");

    // Initialize ticket prices
    setTicketPrices({
      Basic: eventData.ticket_price || 0,
      Diamond: eventData.ticket_price || 0,
      VIP: eventData.ticket_price || 0,
    });

    // Initialize capacity value
    if (eventData.capacity) {
      if (eventData.capacity === "Unlimited" || eventData.capacity === 0) {
        setCapacityValue("Unlimited");
      } else {
        setCapacityValue("Limited");
        setCapacityNumber(Number(eventData.capacity));
      }
    }
  }, [eventData]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setShowLanguageDropdown(false);
      }
      if (
        ticketModalRef.current &&
        !ticketModalRef.current.contains(event.target)
      ) {
        setShowTicketModal(false);
      }
      if (
        capacityModalRef.current &&
        !capacityModalRef.current.contains(event.target)
      ) {
        setShowCapacityModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = (id) => {
    const item = itemsData.find((item) => item.id === id);
    if (item && item.key) {
      const newState = !toggleStates[id];
      setToggleStates((prev) => ({
        ...prev,
        [id]: newState,
      }));

      onOptionChange(item.key, newState);
    }
  };

  // Function to handle editable field clicks
  const handleEditableClick = (item) => {
    if (item.key === "ticket_type") {
      setShowTicketModal(true);
    } else if (item.key === "capacity") {
      setShowCapacityModal(true);
    }
  };

  // Function to handle action items (collaborator, language)
  const handleActionClick = (action) => {
    if (action === "collaborator") {
      setShowCollaboratorModal(true);
    } else if (action === "language") {
      setShowLanguageDropdown((prev) => !prev);
    }
  };

  // Add a collaborator
  const addCollaborator = (e) => {
    e.preventDefault();
    if (!collaboratorEmail) return;

    const newCollaborator = {
      name: collaboratorEmail.split("@")[0],
      email: collaboratorEmail,
    };

    const updatedCollaborators = [...collaborators, newCollaborator];
    setCollaborators(updatedCollaborators);
    onOptionChange("collaborators", updatedCollaborators);
    setCollaboratorEmail("");
    setShowCollaboratorModal(false);
  };

  // Remove a collaborator
  const removeCollaborator = (email) => {
    const updatedCollaborators = collaborators.filter((c) => c.email !== email);
    setCollaborators(updatedCollaborators);
    onOptionChange("collaborators", updatedCollaborators);
  };

  // Select a language
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    onOptionChange("language", language);
    setShowLanguageDropdown(false);
  };

  // Update ticket value
  const updateTicketValue = (value) => {
    setTicketValue(value);
    onOptionChange("ticket_type", value);

    // If switching to paid, update the ticket price
    if (value !== "Free") {
      onOptionChange("ticket_price", ticketPrices[value]);
    } else {
      onOptionChange("ticket_price", 0);
    }
  };

  // Update ticket price
  const updateTicketPrice = (type, price) => {
    const numericPrice = Number(price);
    setTicketPrices((prev) => ({
      ...prev,
      [type]: numericPrice,
    }));

    if (ticketValue === type) {
      onOptionChange("ticket_price", numericPrice);
    }
  };

  // Update capacity value
  const updateCapacityValue = (value) => {
    setCapacityValue(value);

    if (value === "Unlimited") {
      onOptionChange("capacity", 0);
    } else {
      onOptionChange("capacity", capacityNumber);
    }
  };

  // Update capacity number
  const updateCapacityNumber = (number) => {
    const numericValue = Number(number);
    setCapacityNumber(numericValue);
    onOptionChange("capacity", numericValue);
  };

  return (
    <>
      <ul role="list" className="mt-5 space-y-[.2rem]">
        <p className="mb-2 text-100 font-500">More options</p>
        {itemsData.map((item) => (
          <li
            key={item.id}
            className="bg-white px-4 py-2 shadow-sm sm:rounded-md sm:px-3"
          >
            <div className="flex w-full items-center justify-between">
              {/* Left side with image and label */}
              <div className="flex items-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.label}
                  className="mr-2 size-7"
                />
                <span className="text-100 font-400">{item.label}</span>
              </div>

              {/* Right side with toggle or value/edit button */}
              <div className="items-center">
                {item.type === "toggle" ? (
                  <Switch
                    checked={toggleStates[item.id] || false}
                    onChange={() => handleToggle(item.id)}
                    className={`border-transparent relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-muted transition-colors duration-200 ease-in-out ${toggleStates[item.id] ? "bg-primary" : "bg-muted"}`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        toggleStates[item.id]
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    />
                  </Switch>
                ) : item.action ? (
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleActionClick(item.action);
                      }}
                      className="text-sm font-medium flex items-center text-black"
                    >
                      {item.action === "language" && selectedLanguage !== "Add"
                        ? selectedLanguage
                        : item.action === "collaborator" &&
                            collaborators.length > 0
                          ? `${collaborators.length} added`
                          : item.value}
                      {item.action === "language" && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-black">
                      {item.key === "ticket_type"
                        ? ticketValue
                        : item.key === "capacity"
                          ? capacityValue === "Limited"
                            ? `${capacityNumber}`
                            : capacityValue
                          : item.value}
                    </span>
                    {item.editable && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleEditableClick(item);
                        }}
                      >
                        <Pencil className="text-gray-500 h-4 w-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Language dropdown */}
            {item.action === "language" && showLanguageDropdown && (
              <div
                ref={languageDropdownRef}
                className="absolute right-20 z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {languages.map((language) => (
                  <div
                    key={language}
                    className="text-sm cursor-pointer px-4 py-2 hover:bg-muted"
                    onClick={() => selectLanguage(language)}
                  >
                    {language}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}

        {/* Display collaborators if there is any */}
        {collaborators.length > 0 && (
          <div className="mt-2 bg-white px-4 py-2 shadow-sm sm:rounded-md sm:px-3">
            <div className="space-y-2">
              {collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1"
                >
                  <div className="flex items-center">
                    <div className="text-sm mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      {collaborator.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {collaborator.name || collaborator.email.split("@")[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-400 text-xs mr-2 rounded px-2 py-0.5">
                      Collaborator
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeCollaborator(collaborator.email);
                      }}
                      className="text-muted50 hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ul>

      {/* Collaborator Modal */}
      {showCollaboratorModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-background/80 backdrop-blur-lg">
          <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-200 font-600">Add Collaborator</h3>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCollaboratorModal(false);
                }}
                className="text-muted50 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                  type="email"
                  value={collaboratorEmail}
                  onChange={(e) => setCollaboratorEmail(e.target.value)}
                  placeholder="Enter collaborator email"
                  className="w-full rounded-md bg-white px-3 py-2 outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCollaboratorModal(false);
                  }}
                  className="text-sm rounded-md border border-muted px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={addCollaborator}
                  className="text-sm rounded-md bg-primary px-4 py-2 text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-background/80 backdrop-blur-lg">
          <div
            ref={ticketModalRef}
            className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-200 font-600">Ticket Type</h3>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowTicketModal(false);
                }}
                className="text-muted50 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Free option */}
              <div
                onClick={() => updateTicketValue("Free")}
                className={`cursor-pointer rounded-md p-3 ${
                  ticketValue === "Free" ? "bg-muted" : "bg-white"
                }`}
              >
                Free
              </div>

              {/* Paid options */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Paid Tickets</h4>

                {ticketTypes.map((type) => (
                  <div key={type} className="space-y-2">
                    <div
                      onClick={() => updateTicketValue(type)}
                      className={`flex cursor-pointer items-center justify-between rounded-md p-3 ${
                        ticketValue === type ? "bg-muted" : "bg-white"
                      }`}
                    >
                      <span>{type}</span>
                      {ticketValue === type && (
                        <div className="flex items-center">
                          <span className="mr-2">₦</span>
                          <input
                            type="number"
                            value={ticketPrices[type]}
                            onChange={(e) =>
                              updateTicketPrice(type, e.target.value)
                            }
                            onClick={(e) => e.stopPropagation()}
                            className="w-24 rounded-md bg-white px-2 py-1 outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Capacity Modal */}
      {showCapacityModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-background/80 backdrop-blur-lg">
          <div
            ref={capacityModalRef}
            className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-200 font-600">Capacity</h3>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCapacityModal(false);
                }}
                className="text-muted50 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Unlimited option */}
              <div
                onClick={() => updateCapacityValue("Unlimited")}
                className={`cursor-pointer rounded-md p-3 ${
                  capacityValue === "Unlimited" ? "bg-muted" : "bg-white"
                }`}
              >
                Unlimited
              </div>

              {/* Limited option with number input */}
              <div className="space-y-2">
                <div
                  onClick={() => updateCapacityValue("Limited")}
                  className={`cursor-pointer rounded-md p-3 ${
                    capacityValue === "Limited" ? "bg-muted" : "bg-white"
                  }`}
                >
                  Limited
                </div>

                {capacityValue === "Limited" && (
                  <div className="mt-4 px-3">
                    <label className="text-sm font-medium mb-1 block">
                      Number of attendees
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={capacityNumber}
                      onChange={(e) => updateCapacityNumber(e.target.value)}
                      className="w-full rounded-md bg-white px-3 py-2 outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
