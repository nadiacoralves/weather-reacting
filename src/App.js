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
        class="col-12"
        style={{
          position: "inherit",
          textAlign: "center"
        }}
      >
        <br />
        <br />
        <small>
          <a
            class="source"
            href="https://github.com/nadiacoralves/weather-reacting"
            target="_blank"
            style={{
              letterSpacing: "4px",
              fontSize: "9px",
              color: "#243949"
            }}
          >
            Open source-code, by Nádia Correia Gonçalves.
          </a>
        </small>
      </div>
    </div>
  );
}
