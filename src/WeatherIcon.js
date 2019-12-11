import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { Sunny },
    "01n": { Sunny },
    "02n": { Sunny },
    "02d": { Sunny },
    "03d": { Cloudy },
    "03n": { Cloudy },
    "04d": { Cloudy },
    "04n": { Cloudy },
    "09d": { Rain },
    "09n": { Rain },
    "10d": { Rain },
    "10n": { Rain },
    "11d": { Cloudy },
    "11n": { Cloudy },
    "13d": { Snow },
    "13n": { Snow },
    "50d": { Cloudy },
    "50d": { Cloudy }
  };

  return <div icon={codeMapping[props.code]} />;
}
