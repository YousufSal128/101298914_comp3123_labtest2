import React, { useState, useEffect } from "react";
import { fetchWeather } from "./services/api.js"; 
import "./App.css"; 
const WeatherApp = () => {
    const [city, setCity] = useState("Toronto");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            const data = await fetchWeather(city);
            setWeatherData(data);
        };
        getWeather();
    }, [city]);

    // Function to convert temperature from Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1);
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            {weatherData && (
                <div className="weather-card">
                    <h2>{weatherData.name}</h2>
                    <p>Condition: {weatherData.weather[0].description}</p> {}
                    <img
                        className="icon"
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                    />
                    <p className="temp">
                        {kelvinToCelsius(weatherData.main.temp)}°C
                    </p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p className="min-max">
                        Min Temp: {kelvinToCelsius(weatherData.main.temp_min)}°C | Max Temp:{" "}
                        {kelvinToCelsius(weatherData.main.temp_max)}°C
                    </p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
