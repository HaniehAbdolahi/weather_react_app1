import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatedDate from "./FormatedDate";
import WeatherUnit from "./WeatherUnit";

export default function Weather(props) {
  return (
    <div className="weather">
      <div className="cityName">
        <h2 className="cityName">{props.weatherData.city}</h2>
      </div>
      <div className="date">
        <h6 className="date">
          <FormatedDate
            date={new Date(props.weatherData.date * 1000)}
            flag="dayTime"
          />
        </h6>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="row todayTemp">
            <div className="col-sm-6">
              <WeatherIcon
                flag="openWeather"
                code={props.weatherData.icon}
                size={100}
              />
            </div>
            <div className="col-sm-6">
              <WeatherUnit temperature={props.weatherData.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-5 info">
          <ul>
            <li>describtion: {props.weatherData.description}</li>
            <li>humidity: {props.weatherData.humidity}%</li>
            <li>wind: {props.weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
