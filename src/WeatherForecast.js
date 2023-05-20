import React,{useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forcast , setForcast]=useState(null);
   let [Loaded, setLoaded] = useState(false);

  function handelResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);

  }
  let longitude = props.cordinates.lon;
  let latitude = props.cordinates.lat;
  const appid = "100a50a3255t3abdofc6f395edf0e454";
  let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${appid}`;
  axios.get(url).then(handelResponse);
if (Loaded) {
  return (
    <div className="weatherForecast">
      <div className="row">
        <WeatherForecastDay data={forcast} />
      </div>
    </div>
  );
} else {
  return null;
}
}
