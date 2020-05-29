import React from "react";
import "./App.css";
import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.css";
import "weather-icons/css/weather-icons.css";

export default function App() {
  return (
    <div>
      <Weather defaultCity="New York" />
      <div
        className="col-12"
        style={{
          position: "inherit",
          textAlign: "center",
        }}
      >
        <br />
        <br />
        <small>
          <a
            className="source"
            href="https://github.com/nadiacoralves/weather-reacting"
            style={{
              letterSpacing: "4px",
              fontSize: "9px",
              color: "#243949",
            }}
          >
            Designed and coded, by Nádia Correia Gonçalves.
          </a>
        </small>
      </div>
    </div>
  );
}
