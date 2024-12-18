import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentManagement from '../components/ContentManagement';
import HeaderHP from '../components/HeaderHP';


function ContentPage() {
  return (
    <>
    <HeaderHP/>
    <div className='Container'>
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
        </Typography>
        <ContentManagement />
      </Box>
    </div>
    </>
  );
}

export default ContentPage;
