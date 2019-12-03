import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      percipitation: 14,
      city: response.data.name,
      description: response.data.weather[0].description
      //icon: "wi wi- day - sunny display - 1",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container-md col-4 rounded-lg shadow-lg">
        <form>
          <div className="row">
            <div className="col-7 mt-25px">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <ul className="date">
            <FormattedDate date={weatherData.date} />{" "}
          </ul>
        </div>
        <div className="card bg-transparent">
          <h1>{weatherData.city}</h1>

          <div className="row">
            <div className="col-12">
              <h5 className="py-4">
                <i className={weatherData.icon}></i>
              </h5>
            </div>
          </div>
          <div className="row">
            <h1 className="col-12 py-2" id="temperature">
              {weatherData.temperature}
            </h1>
          </div>
          <h3 className="col-12">
            {" "}
            <span className="min">{weatherData.min}°</span>{" "}
            <span className="max">{weatherData.max}°</span>{" "}
          </h3>
          <h4 className="py-3">{weatherData.description}</h4>
        </div>
        <div className="row">
          <div className="col-12">
            <ul>
              <li>Percepitation: {weatherData.percipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8cce113d0fdd08b0728bb9de122a7c47";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Fetching...";
  }
}
