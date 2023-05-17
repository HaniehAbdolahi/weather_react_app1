import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App container-fluid mh-100">
      <Weather city={"New York"} />
      <footer>
        <a href="https://github.com/HaniehAbdolahi/weather_react_app1">
          source-coded on Github
        </a>{" "}
        by Hanieh Abdolahi
      </footer>
    </div>
  );
}
