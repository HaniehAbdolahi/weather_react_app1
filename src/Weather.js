import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  return (
    <div className="weather">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormatedDate date={new Date(props.weatherData.date * 1000)} />
        </li>
        <li>temperature: {props.weatherData.temperature}°C</li>
        <li>describtion: {props.weatherData.description}</li>
        <li>humidity: {props.weatherData.humidity}%</li>
        <li>wind: {props.weatherData.wind}km/h</li>
        <li>
          <WeatherIcon code={props.weatherData.icon} />
        </li>
      </ul>
    </div>
  );
}
