import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-gray-600">{data.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      <div className="mb-6">
        <div className="text-5xl font-bold text-gray-800 mb-2">
          {Math.round(data.main.temp)}°C
        </div>
        <p className="text-gray-600">
          Feels like {Math.round(data.main.feels_like)}°C
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Droplets className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Humidity</span>
          <span className="font-semibold">{data.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Wind</span>
          <span className="font-semibold">{data.wind.speed} m/s</span>
        </div>
        <div className="flex flex-col items-center">
          <Cloud className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Pressure</span>
          <span className="font-semibold">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}