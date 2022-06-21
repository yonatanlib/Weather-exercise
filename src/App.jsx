import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/system';
import { Grid } from '@mui/material';
import Card from './components/Card/Card';
import divStyle from './div style';
import Header from './components/Header/Header';
import getWeatherData from './JS/weatherDL';

function App() {
  const divClasses = divStyle();
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    getWeatherData().then((data) => setWeather(data));
  }, []);
  const cards = weather.map((city) => <Card cityData={city} />);
  return (
    <div>
      <Header />
      <Box className={divClasses.root}>
        <Container>
          <Grid container justifyContent="space-between" spacing={10}>
            {cards}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
