import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Events from "../pages/dashboard/events/UserEventPage";
import { getQueryParams } from "../utils/getQueryParams";
import { googleAuth, registerEmail } from "../api/authApi";
import { setUser } from "../redux/authSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getQueryParams(window.location.search);
    const { token, user_id, name, email, google_id } = params;

    if (token) {
      dispatch(
        setUser({
          token,
          user_id,
          name,
          email,
          googleId: google_id,
        })
      );
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
