import axios from 'axios';

export const createEvent = async (eventData, bannerImageFile, backgroundImageFile, videoFile, token) => {
  const formData = new FormData();

  // Append text fields
  Object.keys(eventData).forEach((key) => {
    formData.append(key, eventData[key]);
  });

  // Append files if they exist
  if (bannerImageFile) formData.append("banner_image", bannerImageFile);
  if (backgroundImageFile) formData.append("background_image", backgroundImageFile);
  if (videoFile) formData.append("video", videoFile);

  try {
    const response = await axios({
      method: "POST",
      url: "https://api.centrl.ng/create_event.php",
      data: formData,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false, // Try setting to false if true fails
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    throw error;
  }
};
