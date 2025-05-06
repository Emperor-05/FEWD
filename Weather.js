import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New York'); 
  const [error, setError] = useState(null);
  const API_KEY = 'c8998036f7d06ec029b68262b0810490';

  useEffect(() => {
    fetchWeather();
  }, [location]);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city) {
      setLocation(city);
      e.target.reset();
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temp: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
