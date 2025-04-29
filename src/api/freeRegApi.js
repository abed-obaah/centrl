import axios from "axios";

export const submitRegistration = async (formData) => {
  try {
    const response = await axios.post("https://api.centrl.ng/biodate.php", {
      ...formData,
    });

    console.log("Registration response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error submitting registration:", error);
    throw error;
  }
};
