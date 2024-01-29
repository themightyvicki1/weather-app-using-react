import React from "react";

// not found in forecast[0] since we moved it to this component, it will be found in the props.data.then variable //
export default function WeatherForecastDay(props) {
  // function to get the actual day of the week for the daily forecast //
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let max = Math.round(props.data.temperature.maximum);
    return `${max}°`;
  }

  function minTemperature() {
    let min = Math.round(props.data.temperature.minimum);
    return `${min}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <h3>Daily forecast</h3>
      <div className="dailyForecast">
        <div className="eachDay text-center">
          {/*calling to the day function, which will return the day */}
          <div className="dayOfWeek">{day()} </div>
          <div className="iconOfDay">
            <img
              src={props.data.condition.icon_url}
              alt={props.data.condition.description}
            />
          </div>
          <div className="dailyTemp">
            <span className="dailyMax">{maxTemperature()}</span>{" "}
            <span className="dailyMin">{minTemperature()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
