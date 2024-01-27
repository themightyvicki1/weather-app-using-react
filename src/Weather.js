import React from "react";
import "./Weather.css";
import "./index.css";

export default function Weather() {
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
      <h1>Sacramento</h1>
      <ul>
        <li>Friday</li>
        <li>Party cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="same as condition description"
          />
          <span className="main-temp">65</span>
          <span className="unit-displayed">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <small>
                <i class="fa-solid fa-droplet"></i>
              </small>{" "}
              Humidity: 75%
            </li>
            <li>
              <small>
                <i class="fa-solid fa-temperature-high"></i>
              </small>{" "}
              High: 65°C
            </li>
            <li>
              <small>
                <i class="fa-solid fa-temperature-low"></i>
              </small>{" "}
              Low: 43°C
            </li>
            <li>
              <small>
                <i class="fa-solid fa-wind"></i>
              </small>{" "}
              Wind Speed: 7 mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
