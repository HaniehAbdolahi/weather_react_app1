import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daysAbbreviation = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if ((props.flag === "dayTime")) {
    return (
      <div>
        {days[day]} {hours}:{minutes}
      </div>
    );
  }
  if ((props.flag === "day")) {
    return <div>{daysAbbreviation[day]}</div>;
  } else {
    return null;
  }
}
