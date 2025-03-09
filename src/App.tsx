import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { LocationSelector } from './components/LocationSelector';
import { getWeather } from './services/api';
import { WeatherData } from './types/weather';
import { CloudRain } from 'lucide-react';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeather(query);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-4xl mx-auto">  
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CloudRain className="h-10 w-10 text-white" />
            <h1 className="text-4xl font-bold text-white">Weather App</h1>
          </div>
          
          <div className="space-y-2">
            <SearchBar onSearch={handleSearch} />
            <div className="flex items-center">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="px-4 text-white/60">or</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <LocationSelector onLocationSelect={handleSearch} />
          </div>
        </div>

        {loading && (
          <div className="text-center text-white bg-black/20 rounded-lg p-4 backdrop-blur-sm">
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="text-center text-red-200 bg-red-500/20 rounded-lg p-4 backdrop-blur-sm">
            {error}
          </div>
        )}

        {weather && (
          <div className="flex justify-center mt-8">
            <WeatherCard data={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;