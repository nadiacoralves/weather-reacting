import React from "react";
import "./App.css";
import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.css";
import "weather-icons/css/weather-icons.css";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Milton Keynes" />
    </div>
  );
}
