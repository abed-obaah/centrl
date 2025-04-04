import axios from "axios";

// Function to get user profile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(
      "https://api.centrl.ng/get_user_profile.php",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (token, profileData) => {
  try {
    const response = await axios.put(
      "https://api.centrl.ng/update_profile.php",
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user profile:",
      error.response?.data || error,
    );
    throw error;
  }
};

export const updateProfileImages = async (token, bannerImage, profileImage) => {
  try {
    const formData = new FormData();

    if (bannerImage) {
      console.log("📤 Banner Image: ", bannerImage);
      formData.append("banner_image", bannerImage); // ✅ Key must match backend
    }
    if (profileImage) {
      console.log("📤 Profile Image: ", profileImage);
      formData.append("profile_image", profileImage);
    }

    // ✅ Log FormData for Debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // ✅ Change PUT to POST
    const response = await axios.post(
      "https://api.centrl.ng/update_profile_images.php", // ✅ POST request
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // ✅ Critical for file uploads
        },
      },
    );

    console.log("✅ Response: ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Error updating profile images:",
      error.response?.data || error,
    );
    throw error;
  }
};
