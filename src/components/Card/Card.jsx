import React from "react";
import cardStyles from "./Card style";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Card(props) {
  const cardClasses = cardStyles();
  return (
    <Grid item>
      <Paper className={cardClasses.root}>
          <Typography align="right" variant="h4" component="h3">
            ניו יורק
          </Typography>
          <Typography align="right" component="p">
            אובך
          </Typography>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon"/>
        <Box>
          <Typography component="h4">טמפ׳ נמדדת</Typography>
          <Typography component="h4">טמפ׳ נמדדת</Typography>
          <Typography component="h4">טמפ׳ נמדדת</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
