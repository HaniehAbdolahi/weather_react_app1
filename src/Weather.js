import React, { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  //let [temperature, setTemurature] = useState(null);
  let appid = "1a6432c5ca7b6f9b0bee45c98d54ea71";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appid}&units=metric`;
  let [temperature, settemperature] = useState(null);
  let [describtion, setDescribtion] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [icon, setIcon] = useState("");
  let [wind, setWind] = useState(null);
  let [iconUrl, setIconUrl] = useState("");

  function showTempurature(response) {
    //console.log(response);
    settemperature(response.data.main.temp);
    setDescribtion(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setIconUrl(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  }

  axios.get(url).then(showTempurature);
  if (temperature) {
    return (
      <ul className="WeatherApi">
        <li>temperature:{Math.round(temperature)}°C</li>
        <li>describtion:{describtion}</li>
        <li>humidity:{humidity}</li>
        <li>wind:{Math.round(wind)}</li>
        <li>
          <img alt={describtion} src={iconUrl} />
        </li>
      </ul>
    );
  } else {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
}
