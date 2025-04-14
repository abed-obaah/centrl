import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerEmail, verifyOtp } from "../api/authApi";
import { setUser } from "../redux/authSlice";
import { toast } from "sonner";
import AuthOtpModal from "./auth/authModal";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempUser, setTempUser] = useState(null);
  const [otp, setOtp] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = "https://api.centrl.ng/google_callback.php";
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailSubmit = async () => {
    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Authenticating...");

    try {
      const response = await registerEmail(email);

      toast.dismiss(loadingToast);

      if (response?.status === "success") {
        // Save temporary user info & open modal
        setTempUser({
          token: response.token,
          user: response.user,
          profile: response.profile,
        });

        toast.success("OTP sent to your email!");
        setIsModalOpen(true); // Show OTP modal here
      } else {
        toast.error(response?.message || "Failed to register email");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Please try again later.");
      console.error("Error during authentication:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerification = async (value) => {
    const otp = value; // ✅ use the passed value
    console.log("Verifying OTP with email:", email, "and OTP:", otp); // Log the email and OTP before sending request

    if (!otp.trim() || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const verifyingToast = toast.loading("Verifying OTP...");

      console.log(
        "Sending OTP verification request with email:",
        email,
        "and OTP:",
        otp,
      ); // Log the data being sent to the API

      const res = await verifyOtp(email, otp); // pass both email and OTP

      toast.dismiss(verifyingToast);

      if (res?.status === "success") {
        dispatch(
          setUser({
            token: tempUser.token,
            user_id: tempUser.user.id,
            name: tempUser.user.name,
            email: tempUser.user.email,
            googleId: tempUser.user.google_id,
            profileImage: tempUser.profile.profile_image,
          }),
        );

        toast.success("Successfully authenticated!");
        setIsModalOpen(false);
        navigate("/dashboard");
      } else {
        toast.error(res?.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error("OTP verification failed. Try again.");
      console.error("OTP verification error:", err);
    }
  };

  return (
    <div>
      <div className="h-[454px] w-[381px] rounded-xl bg-white px-6 py-4">
        <div>
          <div className="mb-8 pt-4">
            <p className="text-200 font-700 text-foreground">Welcome to</p>
            <h1 className="mb text-700 font-700 leading-[1.1] text-black">
              Centrl
            </h1>
            <p className="font-600 text-foreground">Sign in or sign up below</p>
          </div>

          <hr className="mb-6 text-[#000]/15" />

          <form>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-600 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className={`w-full rounded-lg border text-sm ${
                    emailError ? "border-red-500" : "border-[#000]/15"
                  } px-4 py-2.5 outline-none transition`}
                  required
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-500">{emailError}</p>
                )}
              </div>
            </div>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleEmailSubmit}
              // onClick={handleOpenModal}
              className={`mt-8 w-full rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] px-6 py-2 text-100 font-500 text-white transition-all duration-300 ease-in-out ${
                !isLoading && "hover:from-[#E46708] hover:to-[#CD2574]"
              } ${isLoading && "cursor-not-allowed opacity-75"}`}
            >
              {isLoading ? "Processing..." : "Continue with Email"}
            </button>

            <div className="my-2 text-center">
              <p className="font-200 text-200 text-black">or</p>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
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
      {isModalOpen && (
        <AuthOtpModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          email={email}
          otp={otp}
          setOtp={setOtp}
          onVerifyOtp={handleOtpVerification}
        />
      )}
    </div>
  );
};

export default SignInForm;
