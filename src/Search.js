import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handelResponse(response) {
    setWeatherData({
      ready: true,
      date: response.data.dt,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon:response.data.weather[0].icon
    });
    //iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  }
  function callApi() {
    const appid = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;
    axios.get(url).then(handelResponse);
  }
  function handelSubmit(event) {
    event.preventDefault();
    callApi();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <form onSubmit={handelSubmit}>
          <div className="searchBox input-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a city.."
              autoFocus="on"
              onChange={updateCity}
            />
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </form>
        <Weather weatherData={weatherData} />
      </div>
    );
  } else {
    callApi();
    return "Loading...";
  }
}
