import React from "react";
import "./WeatherInfo.css";

function WeatherInfo({ data }) {
 
  if (!data || !data.name) {
    return null; 
  }

  return (
    <div className="WeatherInfo">
      <div className="info-container">
        <h2>{data.name}</h2>
        {data.main && (
          <>
            <p className="temp">{Math.round(data.main.temp - 273.15)}°C</p>
            <p className="description">{data.weather[0].description}</p>
            <p className="humidity">Humidity: {data.main.humidity}%</p>
          </>
        )}
        {data.message && <p className="error">{data.message}</p>}
      </div>
    </div>
  );
}

export default WeatherInfo;
