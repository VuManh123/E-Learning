import React from 'react';
import Header from '../components/Header';
import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <div>
      <Header />
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4">Chào mừng đến với Trang Quản Trị</Typography>
      </Box>
    </div>
  );
}

export default HomePage;
