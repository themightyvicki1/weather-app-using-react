import React from "react";

export default function FormattedDate(props) {
  //console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let year = props.date.getFullYear();
  let dayOfMonth = props.date.getDate();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate">
      Last updated: {day} {month}/{dayOfMonth}/{year} {hours}:{minutes}
    </div>
  );
}
