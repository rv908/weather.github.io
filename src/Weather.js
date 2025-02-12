import React, { useState } from "react";
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";

const weatherData = {
  Bengaluru: { temp: 28, description: "Sunny", icon: "01d" },
  Delhi: { temp: 24, description: "Cloudy", icon: "03d" },
  Mumbai: { temp: 30, description: "Humid", icon: "02d" },
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    if (weatherData[city]) {
      setWeather({ name: city, ...weatherData[city] });
    } else {
      setWeather(null);
      alert("City not found!");
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>
      <TextField
        label="Enter city name"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <Button variant="contained" color="primary" onClick={fetchWeather}>
        Get Weather
      </Button>
      {weather && (
        <Card style={{ marginTop: "20px", padding: "10px" }}>
          <CardContent>
            <Typography variant="h5">{weather.name}</Typography>
            <Typography variant="body1">{weather.description}</Typography>
            <Typography variant="h6">Temp: {weather.temp}°C</Typography>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="weather icon"
            />
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default WeatherApp;
