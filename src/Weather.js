import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>City name</h1>
      <ul>
        <li>Day of week</li>
        <li>Weather condition</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="same as condition description"
          />
          Temperature
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 75%</li>
            <li>Max temp: 65</li>
            <li>Min temp: 43</li>
            <li>wind speed: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
