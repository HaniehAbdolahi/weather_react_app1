import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [unit, setUnit] = useState("Celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "Celsius") {
    return (
      <span className="WeatherUnit">
        <span className="temp"> {Math.round(props.temperature)}</span>
        <span className="unit">
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
        <span className="unit">
          <span className="temp"> {Math.round(fahrenheit)}</span> °F|
          <a href="/" onClick={changeToCelsius}>
            {" "}
            °C
          </a>
        </span>
      </span>
    );
  }
}
