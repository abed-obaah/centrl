import axios from "axios";

export const submitRegistration = async (formData) => {
  try {
    const response = await axios.post("https://api.centrl.ng/biodate.php", {
      ...formData,
    });

    console.log("Registration response:", response.data);

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.response) {
      return {
        data: error.response.data,
        status: error.response.status,
        error: true,
      };
    }
    throw error;
  }
};

export const getRegisteredUsers = async () => {
  try {
    const response = await axios.get("https://api.centrl.ng/get_biodata.php");
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error);
    throw error;
  }
};
