import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temerature">
            <span className="weatherForecast-temerature-max">19°C</span>
            <span className="weatherForecast-temerature-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
