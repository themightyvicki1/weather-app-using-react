import "./App.css";
import Weather from "./Weather";
// create structure of page here
// keep app as general as i can
export default function App() {
  return (
    <div className="App">
      {/*this container is created b/c of using bootstrap*/}
      <div className="container">
        <Weather defaultCity="Sacramento" />
        <footer>
          <a
            href="https://github.com/themightyvicki1/weather-app-using-react"
            title="</div>"
            target="_blank"
            rel="noreferrer"
          >
            Open source coded by Victoria Greer
          </a>
        </footer>
      </div>
    </div>
  );
}
