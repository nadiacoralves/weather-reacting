import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

export default function WeatherIcon(props) {
  return (
    <div
      className="icon"
      style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
    >
      <Sunny />
    </div>
  );
}
