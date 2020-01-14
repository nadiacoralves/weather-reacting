import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import "./weather.css";

export default function WeatherIcon(props) {
  if (props.code === "01d" || props.code ===  "01n" || props.code ===  "02d" || props.code ===  "02n") {
    return (
      <div
        className="icon"
        style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
      >
        <Sunny />
      </div>
    );
  } else if (props.code === "09d" || props.code ===  "09n" || props.code ===  "10d" || props.code ===  "10n") {
    return (
      <div
        className="icon"
        style={{ fontSize: "0.5em", margin: "1em", position: "relative" }}
      >
        <Rain />
      </div>
    );
  } else if (props.code === "13d" ||  props.code === "13n") {
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
