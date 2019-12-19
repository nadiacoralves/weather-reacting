import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

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
