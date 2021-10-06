import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, ListGroup } from "react-bootstrap";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  // const cities = ['karachi','lahore','islamabad'];

  const baseURL =
    "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5c029331d827ee4b859f9e46c473f2b5";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setWeatherData(response.data);
    });
  }, []);

  if (!weatherData) return null;

  return (
    <Row xs={1} md={2} className="g-4 m-4 p-4">
      <Col>
        <Card>
          <Card.Img
            className="img-icon"
            variant="top"
            src={
              "http://openweathermap.org/img/w/" +
              weatherData.weather[0]["icon"] +
              ".png"
            }
          />
          <Card.Body>
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item key={1}>
                  Current Temperature{" "}
                  {Math.round(weatherData.main.temp - 273, 2)}
                  <sup>o</sup>C
                </ListGroup.Item>
                <ListGroup.Item key={2}>
                  Feels Like {Math.round(weatherData.main.feels_like - 273, 4)}
                  <sup>o</sup>C
                </ListGroup.Item>
                <ListGroup.Item key={3}>
                  {weatherData.weather[0].description}
                </ListGroup.Item>
                <ListGroup.Item key={4}>
                  {weatherData.main.pressure}
                </ListGroup.Item>
                <ListGroup.Item key={5}>
                  {weatherData.main.humidity}%
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
