import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5c029331d827ee4b859f9e46c473f2b5";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setWeatherData(response.data);
    });
  }, []);

  if (!weatherData) return null;

  return (
    <div>
      <h1>{weatherData.name}</h1>
      <p>{weatherData.id}</p>
    </div>
  );
};

export default Home;
