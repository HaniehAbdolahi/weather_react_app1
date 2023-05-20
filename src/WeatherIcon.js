import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const openWeatherCodeMapping = {
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
  const shecodesMapCoding = {
    "mist-day": ["FOG", "#E3F2C1"],
    "mist-night": ["FOG", "#E3F2C1"],
    "snow-day": ["SNOW", "white"],
    "snow-night": ["SNOW", "white"],
    "thunderstorm-day": ["SLEET", "#F6F1F1"],
    "thunderstorm-night": ["SLEET", "#F6F1F1"],
    "rain-day": ["RAIN", "#19A7CE"],
    "rain-night": ["RAIN", "#19A7CE"],
    "shower-rain-day": ["RAIN", "#19A7CE"],
    "shower-rain-night": ["RAIN", "#19A7CE"],
    "broken-clouds-day": ["CLOUDY", "white"],
    "broken-clouds-night": ["CLOUDY", "white"],
    "few-clouds-night": ["PARTLY_CLOUDY_NIGHT", "#0C134F"],
    "few-clouds-day": ["PARTLY_CLOUDY_DAY", "#0C134F"],
    "clear-sky-day": ["CLEAR_DAY", "gold"],
    "clear-sky-night": ["CLEAR_NIGHT", "gold"],
  };

  let [color, setColor] = useState("white");

  //alert(codeMapping[props.code][1]);
  let [icon, setIcon] = useState(null);
  if (props.flag === "openWeather") {
    setIcon(openWeatherCodeMapping[props.code][0]);
    setColor(openWeatherCodeMapping[props.code][1]);
  } else if (props.flag === "shecodes") {
    setIcon(shecodesMapCoding[props.code][0]);
    setColor(shecodesMapCoding[props.code][1]);
  } else {
    //default
    setIcon("CLEAR_DAY");
    setColor("gold");
  }
  return (
    <span className="weatherIcon">
      <ReactAnimatedWeather
        icon={icon}
        // icon={props.code}
        color={color}
        size={props.size}
        animate={true}
      />
    </span>
  );
}
