import React from 'react';
import { Container, Box } from '@mui/system';
import { Grid } from '@mui/material';
import Card from './components/Card/Card';
import divStyle from './div style';
import Header from './components/Header/Header';

function App() {
  const divClasses = divStyle();
  return (
    <div>
      <Header />
      <Box className={divClasses.root}>
        <Container>
          <Grid container justifyContent="space-between" spacing={10}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
