import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

export default function WeatherIcon(props) {
  if (props === "01d" || "01n" || "02d" || "02n") {
    return (
      <div
        className="icon"
        style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
      >
        <Sunny />
      </div>
    );
  } else {
    if (props.data === "09d" || "09n" || "10d" || "10n") {
      return (
        <div
          className="icon"
          style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
        >
          <Rain />
        </div>
      );
    }
  }
  if (props.data === "13d" || "13n") {
    return (
      <div
        className="icon"
        style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
      >
        <Snow />
      </div>
    );
  } else {
    return (
      <div
        className="icon"
        style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
      >
        <Cloudy />
      </div>
    );
  }
}
