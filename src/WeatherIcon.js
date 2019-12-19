import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";
import cloudyDay1 from "./images/cloudyDay1.svg";
import cloudyDay3 from "./images/cloudyDay3.svg";
import cloudy from "./images/cloudy.svg";
import cloudyNight1 from "./images/cloudyNight1.svg";
import day from "./images/day.svg";
import night from "./images/night.svg";
import rainy1 from "./images/rainy1.svg";
import snowy1 from "./images/snowy1.svg";
import snowy2 from "./images/snowy2.svg";

export default function WeatherIcon(props) {
  let icons = [Sunny, Cloudy, Rain, Snow];
  let iconDays = icons[props.code];
  return (
    <div style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}>
      {iconDays}
      <Sunny />
    </div>
  );
}
