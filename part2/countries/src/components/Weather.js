import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({capital}) => {
  const [weather, setWeather] = useState({});

  const getWeather = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=%22${capital}%22`)
      .then(resp => {
        setWeather(resp.data)
      })
  }

  useEffect(getWeather, [])

  const {temperature, wind_dir, wind_speed} = weather.current;

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div><b>Temperature: {temperature} Celsius</b></div>
      {/* <div><b>Wind</b>{wind_speed} mph direction {wind_dir}</div> */}
    </div>
  );
}

export default Weather;