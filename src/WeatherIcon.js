import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": ["CLEAR_DAY", "gold"],
    "01n": ["CLEAR_NIGHT", "gold"],
    "02d": ["PARTLY_CLOUDY_DAY", "#0C134F"],
    "02n": ["PARTLY_CLOUDY_NIGHT", "#0C134F"],
    "03d": ["CLOUDY", "white"],
    "03n": ["CLOUDY", "white"],
    "04d": ["CLOUDY", "white"],
    "04n": ["CLOUDY", "white"],
    "09d": ["RAIN", "#19A7CE"],
    "09n": ["RAIN", "#19A7CE"],
    "10d": ["RAIN", "#19A7CE"],
    "10n": ["RAIN", "#19A7CE"],
    "11d": ["SLEET", "#F6F1F1"],
    "11n": ["SLEET", "#F6F1F1"],
    "13d": ["SNOW", "white"],
    "13n": ["SNOW", "white"],
    "50d": ["FOG", "#E3F2C1"],
    "50n": ["FOG", "#E3F2C1"],
  };
  //alert(codeMapping[props.code][1]);
  return (
    <span className="weatherIcon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code][0]}
        // icon={props.code}
        color={codeMapping[props.code][1]}
        size={props.size}
        animate={true}
      />
    </span>
  );
}
