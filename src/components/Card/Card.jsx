import React from "react";
import cardStyles from "./Card style";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Card(props) {
  const cardClasses = cardStyles();
  return (
    <Grid item>
      <Paper className={cardClasses.root}>
        <Typography className={cardClasses.typography} align="right" variant="h4" sx={{ fontWeight: "Bold" }}>
          ניו יורק
        </Typography>
        <Typography className={cardClasses.typography} color="text.secondary" align="right" variant="body1">
          אובך
        </Typography>
      </Paper>
    </Grid>
  );
}
