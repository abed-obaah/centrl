import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerEmail } from "../api/authApi";
import { setUser } from "../redux/authSlice";
import { toast } from "sonner";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

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
    // Validate email before submission
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const loadingToast = toast.loading("Authenticating...");

      const response = await registerEmail(email);

      toast.dismiss(loadingToast);

      // console.log("email response", response);
      if (response?.status === "success") {
        dispatch(
          setUser({
            token: response.token,
            user_id: response.user.id,
            name: response.user.name,
            email: response.user.email,
            googleId: response.user.google_id,
            profileImage: response.profile.profile_image,
          }),
        );

        toast.success("Successfully authenticated!");
        navigate("/dashboard");
      } else {
        toast.error(response?.message || "Failed to register email");
      }
    } catch (error) {
      toast.error(
        "Something went wrong with our service. Please try again later.",
      );
      console.error("Error during authentication:", error);
    } finally {
      setIsLoading(false);
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
                  className={`text-sm w-full rounded-lg border ${
                    emailError ? "border-red-500" : "border-[#000]/15"
                  } px-4 py-2.5 outline-none transition`}
                  required
                />
                {emailError && (
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
                )}
              </div>
            </div>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleEmailSubmit}
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
    </div>
  );
};

export default SignInForm;
