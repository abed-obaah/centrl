import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Events from "../pages/dashboard/events/UserEventPage";
import { getQueryParams } from "../utils/getQueryParams";
import { googleAuth, registerEmail } from "../api/authApi";
import { setUser } from "../redux/authSlice";
import { useSelector } from "react-redux";



const DashboardLayout = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const params = getQueryParams(window.location.search);
    console.log('Query Params:', params);
    const { token, user_id, name, email, googleId} = params;

    if (token) {
      // Store user details in Redux state
      dispatch(
        setUser({
          token,
          user_id,
          name,
          email,
          googleId: googleId,
        })
      );
    
      console.log("Redux State After Dispatch:", authState);
    }
    
  }, [dispatch]);

  return (
    <>
      <div>
        <Events />
      </div>
    </>
  );
};

export default DashboardLayout;
