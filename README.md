# Weather App

A beautiful and responsive weather application built with React, TypeScript, and Tailwind CSS. The app integrates with the OpenWeatherMap API to provide real-time weather information for cities worldwide.

## Features

- Search for weather information by city name
- Display current temperature, feels like temperature, and weather conditions
- Show humidity, wind speed, and pressure
- Responsive design that works on all devices
- Beautiful UI with a clean, modern aesthetic

## Prerequisites

Before running this project, you need to:

1. Have Node.js installed (version 14 or higher)
2. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```bash
   cp .env
   ```
4. Add your OpenWeatherMap API key to the `.env` file:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

## Development

To start the development server:

```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Axios
- Lucide React (for icons)

## Project Structure

```
src/
  ├── components/       # React components
  ├── services/        # API services
  ├── types/           # TypeScript type definitions
  ├── App.tsx          # Main application component
  └── main.tsx         # Application entry point
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.