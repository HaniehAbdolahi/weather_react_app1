import React, { useState } from "react";
import Weather from "./Weather";

function App() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(result);
  }
  return (
    <form className="App" onSubmit={updateCity}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter a city.."
        onChange={(event) => {
          setResult(event.target.value);
        }}
      />
      <input type="submit" value="Search" />
      <div>
        <small>
          <a href="https://github.com/HaniehAbdolahi/weather_react_app1">
            source-code
          </a>
          by Hanieh Abdolahi
        </small>
      </div>
    </form>
  );
}

export default App;
