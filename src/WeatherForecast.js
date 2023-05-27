import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forcast, setForcast] = useState(null);
  let [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.cordinates]);

  function handelResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }
  if (Loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forcast.map(function (forecastDaily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={forecastDaily} unit={props.unit} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.cordinates.lon;
    let latitude = props.cordinates.lat;
    const appid = "100a50a3255t3abdofc6f395edf0e454";
    //const appid = "8ca7dd4e61360b90fb66918853670e48";
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${appid}&units=Metric`;
    //let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=${appid}&units=metric`;
    axios.get(url).then(handelResponse);
  }
}
