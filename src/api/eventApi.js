import axios from "axios";

export const createEvent = async (
  fullEventData,
  bannerImage,
  videoFile,
  token,
) => {
  const formData = new FormData();

  // Append all fields from fullEventData
  Object.keys(fullEventData).forEach((key) => {
    if (key !== "banner_image" && key !== "video") {
      formData.append(key, fullEventData[key]);
    }
  });

  // Append files if they exist
  if (bannerImage) formData.append("banner_image", bannerImage);
  if (videoFile) formData.append("video", videoFile);

  console.log("Form data entries:");
  for (var pair of formData.entries()) {
    console.log(
      pair[0] + ": " + (pair[1] instanceof File ? "File object" : pair[1]),
    );
  }

  try {
    const response = await axios({
      method: "POST",
      url: "https://api.centrl.ng/create_event.php",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("response from backend", response.data);

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response.data);
    throw error;
  }
};

export const getEvents = async (token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.centrl.ng/get_events.php`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error);
    throw error;
  }
};

export const getEvent = async (eventId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.centrl.ng/get_events.php?id=${eventId}`,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response.data);
    throw error;
  }
};

export const getEventReg = async (eventId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.centrl.ng/get_event_registration_count.php?event_id=${eventId}`,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response.data);
    throw error;
  }
};

export const updateEvent = async (
  eventId,
  updatedEventData,
  bannerImage,
  videoFile,
  token,
) => {
  const formData = new FormData();

  // Append all fields from updatedEventData
  Object.keys(updatedEventData).forEach((key) => {
    if (key !== "banner_image" && key !== "video") {
      formData.append(key, updatedEventData[key]);
    }
  });

  // Append files if they exist
  if (bannerImage) formData.append("banner_image", bannerImage);
  if (videoFile) formData.append("video", videoFile);

  try {
    const response = await axios({
      method: "PUT",
      url: `https://api.centrl.ng/update_event.php?id=${eventId}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response.data);
    throw error;
  }
};
