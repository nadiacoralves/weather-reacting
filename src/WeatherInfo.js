import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <div className="row">
        <ul className="date">
          <FormattedDate date={props.data.date} />
        </ul>
      </div>
      <div className="card bg-transparent">
        <h1>{props.data.city}</h1>

        <div className="row">
          <div className="col-12">
            <h5 className="py-4">
              <i className={props.data.icon}></i>
            </h5>
          </div>
        </div>
        <div className="row">
          <h1 className="col-12 py-2" id="temperature">
            {Math.round(props.data.temperature)}
          </h1>
        </div>
        <h3 className="col-12">
          {" "}
          <span className="min">{Math.round(props.data.min)}°</span>{" "}
          <span className="max">{Math.round(props.data.max)}°</span>{" "}
        </h3>
        <h4 className="py-3">{props.data.description}</h4>
      </div>
      <div className="row">
        <div className="col-12">
          <ul>
            <li>Percepitation: {Math.round(props.data.percipitation)}%</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind:{Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
