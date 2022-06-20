import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import boxStyles from './Card Box style';
import cardStyles from './Card style';

export default function Card(props) {
  const cardClasses = cardStyles();
  const boxClasses = boxStyles();
  return (
    <Grid item>
      <Paper className={cardClasses.root}>
        <Typography align="right" variant="h4" component="h3">
          ניו יורק
        </Typography>
        <Typography align="right" component="p">
          אובך
        </Typography>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
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
              <Typography variant="h5" component="h2">60%</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">23˚C</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">25˚C</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
