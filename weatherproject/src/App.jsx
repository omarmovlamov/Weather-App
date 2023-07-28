import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const [sendCityValue, setsendCityValue] = useState("");

  useEffect(() => {
    const key = "use key";
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${sendCityValue}&appid=${key}&units=metric`
        );
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [sendCityValue]);
  return (
    <div className="App">
      <h1 id="title">
        <span>W</span>eather Project
      </h1>
      <div className="main">
        <div className="inp-btn">
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setsendCityValue(value)}>SEARCH</button>
        </div>

        {city && <Weather city={city} />}
      </div>
    </div>
  );
}

export default App;
