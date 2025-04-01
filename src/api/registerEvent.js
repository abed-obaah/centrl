import axios from "axios";

export const registerEvent = async (eventData, token) => {
    console.log("📡 Function called: registerEvent");
    
    try {
        console.log("📤 API Request:", JSON.stringify(eventData, null, 2));

        const response = await axios.post(
            "https://api.centrl.ng/register_event.php",
            eventData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log("✅ API Response:", response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("❌ API Error Response:", error.response.data);
        } else if (error.request) {
            console.error("❌ API No Response:", error.request);
        } else {
            console.error("❌ API Request Error:", error.message);
        }
        throw error;
    }
};
