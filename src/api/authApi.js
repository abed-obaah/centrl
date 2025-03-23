import axios from "axios";

export const googleAuth = async () => {
  try {
    const response = await axios.get("https://api.centrl.ng/google_callback.php", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Google Auth Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Google auth:", error);
    return null;
  }
};


export const registerEmail = async (email) => {
    try {
      const response = await axios.post("https://api.centrl.ng/register_email.php", 
        { email }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Register Email Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error submitting email:", error);
      return null;
    }
  };