import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import headerStyle from './Header style';

export default function Header() {
  const headerClasses = headerStyle();
  return (
    <Box className={headerClasses.root}>
      <Typography variant="body1" component="h4" gutterBottom>תחזית מסביב לעולם</Typography>
    </Box>

  );
}
