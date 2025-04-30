import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQueryParams } from "../utils/getQueryParams";
import { setUser } from "../redux/authSlice"; // Adjust based on your Redux structure

function GoogleAuthRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getQueryParams(window.location.search);
    const { token, user_id, name, email, google_id } = params;

    if (token) {
      // Dispatch user details to Redux store
      dispatch(
        setUser({
          token: token,
          user_id: user_id,
          name: name,
          email: email,
          googleId: google_id,
          
        })
      );

      // Navigate to dashboard or another protected route
      navigate("/dashboard"); // Adjust as needed
    } else {
      // Handle error or redirect to login
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return <div>Redirecting...</div>;
}

export default GoogleAuthRedirect;
