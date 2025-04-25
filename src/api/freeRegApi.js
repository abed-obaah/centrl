import axios from "axios";

export const submitRegistration = async (formData, eventId) => {
  try {
    const response = await axios.post("https://api.centrl.ng/biodate.php", {
      ...formData,
      event_id: eventId,
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting registration:", error);
    throw error;
  }
};
