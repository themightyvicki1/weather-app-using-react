import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  //const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.daily[0].temperature.day,
      city: response.data.city,
      maximum: response.data.daily[0].temperature.maximum,
      minimum: response.data.daily[0].temperature.minimum,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      date: response.data.daily[0].time,
    });

    console.log(response.data.daily[4].temperature.day);
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="same as condition description"
            />
            <span className="main-temp">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit-displayed">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <small>
                  <i className="fa-solid fa-droplet"></i>
                </small>{" "}
                Humidity: {Math.round(weatherData.humidity)}%
              </li>
              <li>
                <small>
                  <i className="fa-solid fa-temperature-high"></i>
                </small>{" "}
                High: {Math.round(weatherData.maximum)}°C
              </li>
              <li>
                <small>
                  <i className="fa-solid fa-temperature-low"></i>
                </small>{" "}
                Low: {Math.round(weatherData.minimum)}°C
              </li>
              <li>
                <small>
                  <i className="fa-solid fa-wind"></i>
                </small>{" "}
                Wind Speed: {Math.round(weatherData.wind)} mph
              </li>
            </ul>
          </div>
        </div>
        <div className="daily-forecast">
          <ul className="days">
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
          </ul>
        </div>
      </div>
    );
    // else make the api call that will update and then it will set ready to true
  } else {
    //const apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
    let city = props.defaultCity;
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
