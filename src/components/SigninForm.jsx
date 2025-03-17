import { useState } from "react";
import { ChevronDown } from "lucide-react";
import emailjs from "emailjs-com";
import SuccessModal from "./SuccessModal";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Please fill all the fields.");
      return;
    }

    const serviceID = "service_ghtusin";
    const templateID = "template_x8lxs94";
    const publicKey = "yJMWzFlvhFQ5sNrRC";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setModalVisible(true);
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Email sent successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send email. Please try again.");
      });

    // Clear form fields
    setFormData({ email: "" });
    setRole("");
  };

  // Update `role` inside `formData`
  const handleRoleSelect = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
    setRole(selectedRole); // Ensure the button text updates
    setIsOpen(false);
  };

  return (
    <div>
      <div className="h-[454px] w-[381px] rounded-xl border border-[#000]/15 bg-white px-6 py-4">
        <div>
          <div className="mb-8 pt-4">
            <p className="text-200 font-700 text-foreground">Welcome to</p>
            <h1 className="mb text-700 font-700 leading-[1.1] text-black">
              Centrl
            </h1>
            <p className="font-600 text-foreground">Sign in or sign up below</p>
          </div>

          <hr className="mb-6 text-[#000]/15" />

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block font-600 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="text-sm w-full rounded-lg border border-[#000]/15 px-4 py-2.5 outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] px-6 py-2 text-100 font-500 text-white transition-all duration-300 ease-in-out hover:from-[#E46708] hover:to-[#CD2574]"
            >
              Continue with Email
            </button>
            <div className="my-2 text-center">
              <p className="font-200 text-200 text-black">or</p>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg border-[1.8px] border-[#000]/15 bg-white px-6 py-2 text-100 font-600 text-[#5c6c75] transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-2">
                <FcGoogle className="size-7" />
                <span>Continue with Gmail</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
