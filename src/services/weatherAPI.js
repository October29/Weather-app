import axios from 'axios';

const API_KEY = '513391c4e2c402a77b4d4f92d58abbe8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (city, lang) => {
  try {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&lang=${lang}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeatherData;