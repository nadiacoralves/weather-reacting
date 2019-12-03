import React from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="container-md col-4 rounded-lg shadow-lg">
      <form>
        <div className="row">
          <div className="col-7 mt-25px">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
            />
          </div>
          <div className="col-1">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <ul className="date">Monday, 07:00</ul>
      </div>
      <div className="card bg-transparent">
        <h1>New York</h1>

        <div className="row">
          <div className="col-12">
            <h5 className="py-4">
              <i className="wi wi-day-sunny display-1"></i>
            </h5>
          </div>
        </div>
        <div className="row">
          <h1 className="col-12 py-2" id="temperature">
            25°
          </h1>
        </div>
        <h3 className="col-12">
          {" "}
          <span className="min">17°</span> <span className="max">25°</span>{" "}
        </h3>
        <h4 className="py-3">Slow Rain</h4>
      </div>
      <div className="row">
        <div className="col-12">
          <ul>
            <li>Percepitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind:13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}