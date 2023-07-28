import React from "react";

const Weather = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="main-city">
        <h1 className="city-name">{city.name}</h1>
        <p className="city-temp">
          <span className="title-span">Temperature</span> :{" "}
          <span>{city.main.temp}°С</span>
        </p>
        <p className="city-state">
          <span className="title-span"> Weather</span> :{" "}
          <span>{city.weather[0].description}</span>
        </p>
      </div>
    </div>
  );
};
export default Weather;
