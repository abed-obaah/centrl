import { useState } from "react";
import { X } from "lucide-react";
import { Spinner } from "../Spinner";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { toast } from "sonner";
import axios from "axios";
import { submitRegistration } from "../../api/freeRegApi";

export default function FreeRegistrationModal({
  isOpen,
  onClose,
  isRegistering,
  setIsRegistering,
  registrationSuccess,
  setRegistrationSuccess,
  eventData,
}) {
  const [formData, setFormData] = useState({
    first_name: "",
    lastName: "",
    email: "",
    contact: "",
    educationalBackground: "None selected",
    linkedinProfile: "",
    websiteUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Check registration status when email is updated and valid
    if (name === "email" && value && /\S+@\S+\.\S+/.test(value)) {
      checkRegistrationStatus(value);
    }
  };

  const checkRegistrationStatus = async (email) => {
    if (!email || !eventData?.id) return;

    setIsChecking(true);
    try {
      const response = await axios.get(
        `https://api.centrl.ng/check_registration.php?event_id=${eventData.id}&email=${email}`,
      );

      if (response.data.status === "success" && response.data.is_registered) {
        setIsAlreadyRegistered(true);
      } else {
        setIsAlreadyRegistered(false);
      }
    } catch (error) {
      console.error("Error checking registration status:", error);
      setIsAlreadyRegistered(false);
    } finally {
      setIsChecking(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.contact.trim())
      newErrors.contact = "Contact number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if already registered before submitting
    if (isAlreadyRegistered) {
      toast.info("You are already registered for this event");
      return;
    }

    setIsRegistering(true);

    console.log("Submitting registration:", formData);

    try {
      // Send biodata to the server
      const result = await submitRegistration(formData, eventData.id);

      if (result.status === "success") {
        setRegistrationSuccess(true);
        setFormData({
          first_name: "",
          lastName: "",
          email: "",
          contact: "",
          educationalBackground: "None selected",
          linkedinProfile: "",
          websiteUrl: "",
        });
      } else {
        toast.error(
          "Registration failed: " + (result.message || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("An error occurred during registration. Please try again.");
    } finally {
      setIsRegistering(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[600] flex w-full items-start justify-center">
      <div className="relative z-[800] h-full w-full overflow-auto bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link className="hidden md:block" to="/events">
            <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
          </Link>

          <div></div>

          <button
            onClick={onClose}
            className="cursor-pointer rounded-full text-red-600"
          >
            <X size={20} />
          </button>
        </div>

        {registrationSuccess ? (
          <div className="text-center">
            <h2 className="mb-4 text-xl font-semibold text-green-600">
              Registration Successful!
            </h2>
            <p className="mb-4">
              You have successfully registered for "{eventData.event_title}".
            </p>
          </div>
        ) : (
          <div className="z-[800] mx-auto w-full max-w-3xl md:pt-[3rem]">
            <div className="md:grid md:grid-cols-2 md:gap-16">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={eventData.banner_image || "/placeholder.svg"}
                      alt={eventData.name}
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{eventData.name}</h3>
                      <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
                        Free Entry
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="mb-2 text-center text-xl font-semibold md:text-left">
                  Complete Your Event Registration
                </h2>

                <p className="mb-10 text-center text-sm text-gray-600 md:mb-0 md:text-left">
                  You're almost there! Please fill out the form to complete your
                  registration. We can't wait to have you join us!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.first_name ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Nicole"
                  />
                  {errors.first_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.first_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.lastName ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Jackson"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="nicole@gmail.com"
                  />

                  {isChecking && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 transform">
                      <Spinner size="small" />
                    </span>
                  )}

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}

                  {isAlreadyRegistered && (
                    <p className="mt-1 text-xs text-yellow-600">
                      This email is already registered for this event
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.contact ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="+234 8765432101"
                  />
                  {errors.contact && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.contact}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="educationalBackground"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Educational Background
                  </label>
                  <select
                    id="educationalBackground"
                    name="educationalBackground"
                    value={formData.educationalBackground}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="None selected">None selected</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="linkedinProfile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label
                    htmlFor="websiteUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website URL
                  </label>
                  <input
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  disabled={isRegistering || isAlreadyRegistered}
                >
                  {isRegistering ? (
                    <span className="flex items-center justify-center">
                      <Spinner text="Submitting" />
                    </span>
                  ) : isAlreadyRegistered ? (
                    "Already Registered"
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
