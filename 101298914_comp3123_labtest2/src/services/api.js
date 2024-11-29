import axios from "axios";

const API_KEY = "272f58dd4db8e9df06da998f3faebc55"; //API Key
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    return null; 
  }
};
