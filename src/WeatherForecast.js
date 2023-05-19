import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handelResponse(response) {
    console.log(response);
  }
  let longitude = props.cordinates.lon;
  let latitude = props.cordinates.lat;
  const appid = "100a50a3255t3abdofc6f395edf0e454";
  let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${appid}`;
  axios.get(url).then(handelResponse);

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
