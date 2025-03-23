import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuth, registerEmail } from "../api/authApi";
import { setUser } from "../redux/authSlice";

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");


  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleGoogleLogin = () => {
    window.location.href = "https://api.centrl.ng/google_callback.php";
  };

  // const handleGoogleLogin = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await googleAuth();
  //     if (data?.status === "success") {
  //       dispatch(
  //         setUser({
  //           token: data.token,
  //           name: data.user.name,
  //           email: data.user.email,
  //           googleId: data.user.google_id,
  //         })
  //       );
  //       navigate("/dashboard"); // Redirect after successful login
  //     } else {
  //       setStatus("Google authentication failed.");
  //     }
  //   } catch (error) {
  //     setStatus("Something went wrong. Try again.");
  //     console.error("Google Login Error:", error);
  //   }
  //   setIsLoading(false);
  // };

  // const handleEmailSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form from refreshing the page
  //   const response = await registerEmail(formData.email);

  //   if (response) {
  //     console.log("Email registered successfully:", response);
  //     // Handle success (e.g., show a message or redirect user)
  //   } else {
  //     console.log("Failed to register email.");
  //     // Handle failure (e.g., show error message)
  //   }
  // };

 
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = async () => {
    setIsLoading(true); // Start loading
    try {
      if (email.trim() !== "") {
        const response = await registerEmail(email);
        // console.log(response);
        if (response?.status === "success") {
          dispatch(
            setUser({
              token: response.token,
              user_id: response.user.user_id,
              name: response.user.name,
              email: response.user.email,
              googleId: response.user.google_id,
              profileImage: response.profile.profile_image,
            })
          );
          navigate("/dashboard"); // Redirect after successful login
        } else {
          setStatus("Failed to register email.");
        }
      }
    } catch (error) {
      setStatus("Something went wrong. Try again.");
      console.error("Error during process:", error);
    } finally {
      setIsLoading(false); // Stop loading
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

          <form
          //  onSubmit={handleEmailSubmit}
           >
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
        onBlur={handleBlur} // Triggers API call when user leaves the field
        placeholder="you@email.com"
        className="text-sm w-full rounded-lg border border-[#000]/15 px-4 py-2.5 outline-none transition"
        required
      />
              </div>
        
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-lg border-[1.8px] border-[#000]/15 bg-white px-6 py-2 text-100 font-600 text-[#5c6c75] transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-2">
                <FcGoogle className="size-7" />
                <span>{isLoading ? "Loading..." : "Continue with Gmail"}</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
