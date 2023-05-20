import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatedDate from "./FormatedDate";

export default function WeatherForecastDay(props) {
  console.log(props.data);
 
  return (
    <div className="WeatherForecastDay">
      <div className="weatherForecast-day">
        <FormatedDate date={new Date(props.data[0].time * 1000)} flag="day" />
      </div>
      <WeatherIcon flag="shecodes" code={props.data[0].condition.icon} size={36} />
      <div className="weatherForecast-temerature">
        <span className="weatherForecast-temerature-max">
          {Math.round(props.data[0].temperature.maximum)}°C
        </span>
        <span className="weatherForecast-temerature-min">
          {Math.round(props.data[0].temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
}
