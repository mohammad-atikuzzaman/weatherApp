import axios from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(city: string): Promise<WeatherData> {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling or try another city.`);
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
}

export async function getForecast(city: string): Promise<ForecastData> {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling or try another city.`);
    }
    throw new Error('Failed to fetch forecast data. Please try again later.');
  }
}