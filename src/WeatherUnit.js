import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [unit, setUnit] = useState("Metric");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
  }

  if (unit === "Metric") {
    return (
      <span className="WeatherUnit">
        <span className="col-sm-5 temp"> {Math.round(props.temperature)}</span>
        <span className="col-sm-7 unit">
          {" "}
          °C|
          <a href="/" onClick={changeToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.temperature * 9) / 5 + 32;
    return (
      <span className="WeatherUnit">
        <span className="col-sm-5 temp"> {Math.round(fahrenheit)}</span>
        <span className="col-sm-7 unit">
          °F|
          <a href="/" onClick={changeToCelsius}>
            {" "}
            °C
          </a>
        </span>
      </span>
    );
  }
}
