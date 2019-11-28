import React from "react";
import "./App.css";
import Weather from "./app_component/weather_component";
import "bootstrap/dist/css/bootstrap.css";
import "weather-icons/css/weather-icons.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
