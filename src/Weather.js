import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Weather(props) {
  // by default, will start with defaultCity then update with searched
  const [city, setCity] = useState(props.defaultCity);
  //const [ready, setReady] = useState(false);
  //const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecast, setForecast] = useState(null);
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
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
      date: new Date(response.data.daily[0].time * 1000),
    });
    //setting the forecast here is saving basically the same weather data info but as an array, whereas above it's only being saved as the first values //
    setForecast(response.data.daily);

    //console.log(response);

    //console.log(response.data.daily[4].temperature.day);
    //setReady(true);
  }

  function search() {
    //const apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
    //let city = props.defaultCity;
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city, call to function to handle this
    search();
  }

  function handleCitySearched(event) {
    //we don't want to prevent default behavior here
    // store input value inside a state
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                autoFocus="on"
                className="form-control"
                onChange={handleCitySearched}
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
        <WeatherInfo data={weatherData} />

        <div className="forecastBeingDisplayed">
          <h7 className="text-capitalize text-decoration-underline">
            Five day forecast
          </h7>
          <div className="row">
            {/*using a map to loop through the forecast (array) variable*/}
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
    // else make the api call that will update and then it will set ready to true
  } else {
    //call to search function here too to be able to get to the api call
    //by default it knows to use defaultCity b/c sent first in main component
    search();
    return "Loading...";
  }
}
