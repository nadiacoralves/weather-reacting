import React from "react";
import "./App.css";
import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.css";
import "weather-icons/css/weather-icons.css";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Milton Keynes" />
      <div
        class="col-12"
        style={{
          position: "inherit",
          textAlign: "center"
        }}
      >
        <small>
          <a
            class="source"
            href="https://github.com/nadiacoralves/weather-reacting"
            target="_blank"
            style={{
              letterSpacing: "4px",
              fontSize: "9px",
              color: "#243949",
              padding: "0",
              margin: "0"
            }}
          >
            Open source-code, by Nádia Correia Gonçalves.
          </a>
        </small>
      </div>
    </div>
  );
}
