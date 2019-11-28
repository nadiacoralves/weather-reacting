import React from "react";

const Weather = props => {
  return (
    <div className="container">
      <div className="cards">
        <h1>New York</h1>
        <h5 className="py-4">
          <i className="wi wi-day-sunny display-1"></i>
        </h5>
        <h1 className="py-2">25°</h1>

        {/** show max and min temp */}
        {minMaxTemp(17, 25)}
        <h4 className="py-3">Slow Rain</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}°</span>
      <span className="px-4">{max}°</span>
    </h3>
  );
}

export default Weather;
