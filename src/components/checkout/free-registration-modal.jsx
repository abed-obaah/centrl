import { useState } from "react";
import { X } from "lucide-react";
import { Spinner } from "../Spinner";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { toast } from "sonner";
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
    last_name: "",
    address: "",
    phone_number: "",
    education_background: "None selected",
    linkedin_profile: "",
    website_url: "",
  });

  const [errors, setErrors] = useState({});
  // const [isChecking, setIsChecking] = useState(false);
  // const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Check registration status when email is updated and valid
    // if (name === "address" && value && /\S+@\S+\.\S+/.test(value)) {
    //   checkRegistrationStatus(value);
    // }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.lastName = "Last name is required";
    if (!formData.address.trim()) newErrors.address = "Email is required";
    if (formData.address && !/\S+@\S+\.\S+/.test(formData.address)) {
      newErrors.address = "Please enter a valid email";
    }
    if (!formData.phone_number.trim())
      newErrors.phone_number = "Contact number is required";

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
      const result = await submitRegistration(formData);

      if (result.success === true) {
        setRegistrationSuccess(true);
        setFormData({
          first_name: "",
          last_name: "",
          address: "",
          phone_number: "",
          education_background: "None selected",
          linkedin_profile: "",
          website_url: "",
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
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.last_name ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Jackson"
                  />
                  {errors.last_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.last_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="address"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.address ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="nicole@gmail.com"
                  />

                  {/* {isChecking && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 transform">
                      <Spinner size="small" />
                    </span>
                  )} */}

                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.address}
                    </p>
                  )}

                  {/* {isAlreadyRegistered && (
                    <p className="mt-1 text-xs text-yellow-600">
                      This email is already registered for this event
                    </p>
                  )} */}
                </div>

                <div>
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border ${errors.phone_number ? "border-red-500" : "border-gray-300"} p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="+234 8765432101"
                  />
                  {errors.phone_number && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone_number}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="education_background"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Educational Background
                  </label>
                  <select
                    id="education_background"
                    name="education_background"
                    value={formData.education_background}
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
                    htmlFor="linkedin_profile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin_profile"
                    name="linkedin_profile"
                    value={formData.linkedin_profile}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website_url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website URL
                  </label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  disabled={isRegistering}
                >
                  {isRegistering ? (
                    <span className="flex items-center justify-center">
                      <Spinner text="Submitting" />
                    </span>
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
