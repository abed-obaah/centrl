import axios from "axios";
import { store } from "../redux/store"; // Adjust the path to your Redux store

export const getProfile = async () => {
  try {
    const state = store.getState(); // Get the Redux state
    const token = state.auth?.token; 
    const user_id = state.auth?.user_id; // Retrieve user_id

    console.log("Token:", token);
    console.log("User ID:", user_id);

    const response = await axios.get("https://api.centrl.ng/get_user_profile.php", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Pass token in headers
      },
    });

    console.log("Get Profile Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Profile Response:", error);
    return null;
  }
};
