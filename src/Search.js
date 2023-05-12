import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");
  let [icon, setIcon] = useState("");
  let [iconUrl, setIconUrl] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeatherForcast(response) {
    setIcon(response.data.weather[0].icon);
    setIconUrl(`https://openweathermap.org/img/wn/${icon}@2x.png`);

    setResult(
      <ul>
        <li>temperature:{Math.round(response.data.main.temp)}°C</li>
        <li>describtion:{response.data.weather[0].description}</li>
        <li>humidity:{response.data.main.humidity}</li>
        <li>wind:{Math.round(response.data.wind.speed)}</li>
        <li>
          <img alt={response.data.weather[0].description} src={iconUrl} />
        </li>
      </ul>
    );
  }
  function handelSubmit(event) {
    event.preventDefault();
    let appid = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;
    axios.get(url).then(showWeatherForcast);
  }

  return (
    <div className="Search">
      <form onSubmit={handelSubmit}>
        <h1>Weather App</h1>
        <input type="text" placeholder="Enter a city.." onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{result}</p>
    </div>
  );
}
