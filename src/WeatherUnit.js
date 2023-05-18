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
      <div className="WeatherUnit">
        <span>temperature: {Math.round(props.temperature)}</span>
        <span className="unit">
          {" "}
          °C|
          <a href="/" onClick={changeToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.temperature * 9) / 5 + 32;
    return (
      <div className="WeatherUnit">
        <span>
          temperature: {Math.round(fahrenheit)} °F|
          <a href="/" onClick={changeToCelsius}>
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  }
}
