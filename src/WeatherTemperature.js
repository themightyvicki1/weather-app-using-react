import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <span className="WeatherTemperature">
        <span className="mainTemp">{Math.round(props.celsius)}</span>
        <span className="unitDisplayed">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitValue = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="mainTemp">{Math.round(fahrenheitValue)}</span>
        <span className="unitDisplayed">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
