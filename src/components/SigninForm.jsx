import { useEffect, useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse URL parameters
    const searchParams = new URLSearchParams(location.search);
    const googleAuthStatus = searchParams.get("status");
    const userData = searchParams.get("user");

    console.log("googleAuthStatus", googleAuthStatus);
    console.log("userData", userData);

    if (googleAuthStatus === "success" && userData) {
      try {
        // Parse user data if it's JSON-encoded
        const user =
          typeof userData === "string"
            ? JSON.parse(decodeURIComponent(userData))
            : userData;

        localStorage.setItem("user", JSON.stringify(user));

        if (user.google_id) {
          localStorage.setItem("token", user.google_id);
        }

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
        navigate("/dashboard");
      } catch (error) {
        console.error(
          "Error processing Google authentication response:",
          error,
        );
        setStatus("Error processing login data. Please try again.");
      }
    }
    // Handle failed Google authentication
    else if (googleAuthStatus === "error") {
      const errorMessage =
        searchParams.get("message") || "Google authentication failed";
      setStatus(errorMessage);
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setStatus("Please fill all the fields.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://api.centrl.ng/google_login.php",
        formData,
      );

      console.log("response", response);

      // Handle successful login
      if (response.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        setStatus("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);

      if (error.response) {
        setStatus(
          error.response.data.message || "Login failed. Please try again.",
        );
      } else if (error.request) {
        setStatus("No response from server. Please check your connection.");
      } else {
        setStatus("Error during login. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const redirectUri = encodeURIComponent(
        window.location.origin + window.location.pathname,
      );

      window.location.href = `https://api.centrl.ng/google_callback.php?redirect_uri=${redirectUri}`;
    } catch (error) {
      console.error("Google login failed:", error);
      setStatus("Google login failed. Please try again.");
    }
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

          {status && <div className="mb-4 font-500 text-[red]">{status}</div>}

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
              disabled={isLoading}
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] px-6 py-2 text-100 font-500 text-white transition-all duration-300 ease-in-out hover:from-[#E46708] hover:to-[#CD2574]"
            >
              {isLoading ? "Loading..." : "Continue with Email"}
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
