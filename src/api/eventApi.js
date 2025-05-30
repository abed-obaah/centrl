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
  userId,
  updatedEventData,
  bannerImage,
  videoFile,
  token,
) => {
  const formData = new FormData();

  formData.append("event_id", eventId);
  formData.append("user_id", userId);

  Object.keys(updatedEventData).forEach((key) => {
    if (key !== "banner_image" && key !== "video") {
      if (Array.isArray(updatedEventData[key])) {
        formData.append(key, JSON.stringify(updatedEventData[key]));
      } else if (
        typeof updatedEventData[key] === "object" &&
        updatedEventData[key] !== null
      ) {
        formData.append(key, JSON.stringify(updatedEventData[key]));
      } else {
        formData.append(key, updatedEventData[key]);
      }
    }
  });

  if (bannerImage) {
    formData.append("banner_image", bannerImage);
  }

  if (videoFile) {
    formData.append("video", videoFile);
  }

  console.log("Final FormData before API call::");
  for (var pair of formData.entries()) {
    console.log(
      pair[0] + ": " + (pair[1] instanceof File ? "File object" : pair[1]),
    );
  }

  try {
    const response = await axios({
      method: "PUT",
      url: `https://api.centrl.ng/update_event.php`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("response from backend", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const inviteGuests = async (eventId, emails, userId, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://api.centrl.ng/invite_guests.php",
      data: {
        event_id: eventId,
        user_id: userId,
        emails: emails,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("response from backend", response.data);

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error);
    throw error;
  }
};

export const getUserInvitations = async (userId, token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.centrl.ng/get_user_invitations.php?user_id=${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("response from backend", response.data);

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error);
    throw error;
  }
};
