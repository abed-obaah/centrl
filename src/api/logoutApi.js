import axios from "axios";

export const logoutUser = async (token, isGoogleAuth = false) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://api.centrl.ng/logout.php",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      data: {
        auth_type: isGoogleAuth ? "google" : "email",
      },
    });

    console.log("Logout response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);

    return {
      status: "success",
      message: "Local session cleared",
    };
  }
};
