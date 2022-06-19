import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Card from "./components/Card/Card";
import divStyle from "./div style";

function App() {
  const divClasses = divStyle();
  return (
    <div className={divClasses.root}>
      <Container>
        <Grid container justifyContent="space-between" spacing={10}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
