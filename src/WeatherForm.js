import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function WeatherForm() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ec42ab59de190f9d357549ed1ad5dcc`;
  const citySearch = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        //   console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Data :", error.response.data);
            console.log("Status :" + error.response.status);
            setData(error.response.data)
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          setCity("");
        });
    }
  };
  return (
    
    <div className="WeatherForm">
        
      <div className="search">
      <label className="Heading"><b>Weather In Your City</b> </label>
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={citySearch}
          placeholder="Enter City"
          type="text"
        />

        <WeatherInfo data={data}/>
      </div>
      
    </div>
  );
}

export default WeatherForm;
