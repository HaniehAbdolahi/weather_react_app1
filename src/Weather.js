import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  //return "from weather";

  let [weatherData, setWeatherData] = useState({ ready: false });
  function handelResponse(response) {
    setWeatherData({
      ready: true,
      date: response.data.dt,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <Search />
        <ul className="weather">
          <li>
            <FormatedDate date={new Date(weatherData.date * 1000)} />
          </li>
          <li>temperature: {weatherData.temperature}°C</li>
          <li>describtion: {weatherData.description}</li>
          <li>humidity: {weatherData.humidity}%</li>
          <li>wind: {weatherData.wind}km/h</li>
          <li>
            <img alt={weatherData.description} src={weatherData.iconUrl} />
          </li>
        </ul>
      </div>
    );
  } else {
    let appid = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appid}&units=metric`;
    axios.get(url).then(handelResponse);
    return "Loading...";
  }
}
