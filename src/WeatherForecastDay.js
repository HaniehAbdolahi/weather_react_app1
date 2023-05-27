import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatedDate from "./FormatedDate";

export default function WeatherForecastDay(props) {
  function changeTemperatureByUnit(temp) {
    if (props.unit === "Metric") {
      return Math.round(temp);
    } else {
      return Math.round((temp * 9) / 5 + 32);
    }
  }
  return (
    <div className="WeatherForecastDay">
      <FormatedDate date={new Date(props.data.time * 1000)} flag="day" />
      <div className="weatherForecast-day">
        <WeatherIcon
          source={"shecodes"}
          code={props.data.condition.icon}
          size={36}
        />
      </div>
      <div className="weatherForecast-temerature">
        <span className="weatherForecast-temerature-max">
          {changeTemperatureByUnit(props.data.temperature.maximum)}°C
        </span>
        <span className="weatherForecast-temerature-min">
          {Math.round(props.data.temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
}
