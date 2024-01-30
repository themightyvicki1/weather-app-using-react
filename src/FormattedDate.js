import React from "react";

export default function FormattedDate(props) {
  let date = new Date();

  console.log(props.date);
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
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let year = date.getFullYear();
  let dayOfMonth = date.getDate();
  let ampm = "am";
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours === 12) {
    ampm = "pm";
  }
  if (hours === 13) {
    hours = 1;
    ampm = "pm";
  }
  if (hours === 14) {
    hours = 2;
    ampm = "pm";
  }
  if (hours === 15) {
    hours = 3;
    ampm = "pm";
  }
  if (hours === 16) {
    hours = 4;
    ampm = "pm";
  }
  if (hours === 17) {
    hours = 5;
    ampm = "pm";
  }
  if (hours === 18) {
    hours = 6;
    ampm = "pm";
  }
  if (hours === 19) {
    hours = 7;
    ampm = "pm";
  }
  if (hours === 20) {
    hours = 8;
    ampm = "pm";
  }
  if (hours === 21) {
    hours = 9;
    ampm = "pm";
  }
  if (hours === 22) {
    hours = 10;
    ampm = "pm";
  }
  if (hours === 23) {
    hours = 11;
    ampm = "pm";
  }
  let minutes = date.getMinutes();
  console.log(minutes);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate">
      Last updated: {day} {month}/{dayOfMonth}/{year} {hours}:{minutes} {ampm}
    </div>
  );
}
