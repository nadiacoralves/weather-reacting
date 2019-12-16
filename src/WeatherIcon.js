import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { Sunny },
    "01n": { Sunny },
    "02d": { Cloudy },
    "02n": { Cloudy },
    "03d": { Cloudy },
    "04d": { Cloudy },
    "04n": { Cloudy },
    "09d": { Rain },
    "09n": { Rain },
    "10d": { Rain },
    "10n": { Rain },
    "11d": { Rain },
    "11n": { Rain },
    "13d": { Snow },
    "13n": { Snow },
    "50d": { Rain },
    "50n": { Rain }
  };
  return (
    <div
      className="icon"
      style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
    >
      {codeMapping[props.code]}
    </div>
  );
}
