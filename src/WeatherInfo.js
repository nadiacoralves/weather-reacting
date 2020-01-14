import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <ul className="date">
          <FormattedDate date={props.data.date} />
        </ul>
      </div>
      <div className="card-block col ml-25 shadow" style={{ width: "30rem" }}>
        <h1>{props.data.city}</h1>

        <div className="row"></div>
        <div className="row">
          <h1 className="col-6" id="temperature">
            {Math.round(props.data.temperature)}
            <span className="degreeIcon">°</span>
          </h1>
          <div className="col-6">
            <h5>
              <WeatherIcon code={props.data.icon} />
            </h5>
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        <h4 className="col-6">{props.data.description}</h4>
        <h3 className="col-6">
          <span className="min col" style={{ fontWeight: "100" }}>
            {Math.round(props.data.min)}°
          </span>
          <span className="max col" style={{ fontWeight: "800" }}>
            {Math.round(props.data.max)}°
          </span>
        </h3>
      </div>
      <hr style={{ backgroundColor: "#afafaf" }} />
      <div className="row">
        <div className="col-10">
          <ul>
            <li>
              <span style={{ color: "#bdbdbd", fontWeight: "100" }}>
                Percepitation:
              </span>{" "}
              {Math.round(props.data.percipitation)}%
            </li>
            <li>
              <span style={{ color: "#bdbdbd", fontWeight: "100" }}>
                Humidity:
              </span>{" "}
              {Math.round(props.data.humidity)}%
            </li>
            <li>
              <span style={{ color: "#bdbdbd", fontWeight: "100" }}>Wind:</span>{" "}
              {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
