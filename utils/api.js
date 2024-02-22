import axios from "axios";
const API_KEY = "bc4fb0d07b70493f952130435242202";

export const fetchWeather = async (searchText) => {
  try {
    const response = await axios.get(
      ` http://api.weatherapi.com/v1/current.json?key=bc4fb0d07b70493f952130435242202&q=${searchText}`
    );
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};
