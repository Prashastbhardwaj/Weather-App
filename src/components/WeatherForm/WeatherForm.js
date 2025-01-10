import React, { useState } from "react";
import axios from "axios";
import "./WeatherForm.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

function WeatherForm() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
  const handleInputChange = (event) => {
    const value = event.target.value;
    setCity(value);

    if (value.length > 2) {
      axios
        .get(
          `${baseUrl}/find?q=${value}&type=like&appid=${apiKey}`
        )
        .then((response) => {
          const uniqueCities = {};

          response.data.list.forEach((item) => {
            const cityKey = `${item.name},${item.sys.country}`;
            if (!uniqueCities[cityKey]) {
              uniqueCities[cityKey] = {
                name: item.name,
                country: item.sys.country,
              };
            }
          });
          setSuggestions(Object.values(uniqueCities));
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (selectedCity) => {
    setCity(selectedCity.name);
    setSuggestions([]);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      });
  };

  return (
    <div className="WeatherForm">
      <input
        className="city-input"
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default WeatherForm;
