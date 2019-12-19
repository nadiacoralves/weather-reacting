import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      percipitation: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    const apiKey = "8cce113d0fdd08b0728bb9de122a7c47";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handlSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container-md col-4 shadow-lg p-3 mb-25">
        <form onSubmit={handlSubmit}>
          <div className="row">
            <div className="col-7 mt-25px">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
                onChange={handleCityChange}
                style={{ borderRadius: "25px" }}
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                value="Search"
                className="btn btn-link"
                style={{ color: "#cccccc" }}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Fetching...";
  }
}
