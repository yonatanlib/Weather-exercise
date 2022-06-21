import React from 'react';
import { PropTypes } from 'prop-types';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import boxStyles from './Card Box style';
import cardStyles from './Card style';


export default function Card(props) {
  const { cityName, description, feelsLike, temp, humidity, icon} = props.cityData;
  console.log(typeof (temp))
  const cardClasses = cardStyles();
  const boxClasses = boxStyles();
  return (
    <Grid item>
      <Paper className={cardClasses.root}>
        <Typography align="right" variant="h4" component="h3">
          {cityName}
        </Typography>
        <Typography align="right" component="p">
          {description}
        </Typography>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        <Box className={boxClasses.root}>
          <Grid
            container
            justifyContent="space-around"
            align="center"
            rowSpacing={1.5}
          >
            <Grid item xs={4}>
              <Typography component="h4">לחות</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component="h4">טמפ׳ מורגשת</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component="h4">טמפ׳ נמדדת</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">{humidity}%</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">{Math.round(feelsLike)}˚C</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">{Math.round(temp)}˚C</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}

Card.propTypes = {
  cityName: PropTypes.string,
  description: PropTypes.string,
  feelsLike: PropTypes.number, 
  temp: PropTypes.number, 
  humidity: PropTypes.number, 
  icon: PropTypes.string,
}