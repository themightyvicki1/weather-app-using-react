import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        {/*new component to format the date in a nice view */}
        {/*send the date variable in the array from the API response */}
        <li className="dateFormatted">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <small>
                <i className="fa-solid fa-droplet"></i>
              </small>{" "}
              Humidity: {Math.round(props.data.humidity)}%
            </li>
            <li>
              <small>
                <i className="fa-solid fa-temperature-high"></i>
              </small>{" "}
              High: {Math.round(props.data.maximum)}°C
            </li>
            <li>
              <small>
                <i className="fa-solid fa-temperature-low"></i>
              </small>{" "}
              Low: {Math.round(props.data.minimum)}°C
            </li>
            <li>
              <small>
                <i className="fa-solid fa-wind"></i>
              </small>{" "}
              Wind Speed: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="row">
          <div className="col">
            <div className="forecastDay">Mon</div>
            <div className="forecastIcon">
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
            <span className="forecastMax">19</span> |{" "}
            <span className="forecastMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
