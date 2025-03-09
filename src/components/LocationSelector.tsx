import React from 'react';
import { Country, City } from 'country-state-city';
import { MapPin } from 'lucide-react';

interface LocationSelectorProps {
  onLocationSelect: (city: string) => void;
}

export function LocationSelector({ onLocationSelect }: LocationSelectorProps) {
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');

  const countries = Country.getAllCountries();
  const cities = selectedCountry 
    ? City.getCitiesOfCountry(selectedCountry) || []
    : [];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedCity('');
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    if (cityName) {
      const country = countries.find(c => c.isoCode === selectedCountry);
      onLocationSelect(`${cityName},${country?.isoCode}`);
    }
  };

  return (
    <div className="w-full  space-y-2 p-4 bg-white/20 backdrop-blur-lg shadow-md rounded-lg">
      <div className="flex items-center gap-2 text-gray-700">
        <MapPin className="h-5 w-5 text-blue-500" />
        <span className="text-lg font-medium">Select Your Location</span>
      </div>
      
      <div className="relative">
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/70 backdrop-blur-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCountry && (
        <div className="relative">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/70 backdrop-blur-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
