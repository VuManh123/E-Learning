import { Box, Typography } from '@mui/material';
import React from 'react';
import HeaderHP from '../../components/HeaderHP';
import ContentManagement from './ContentManagement';

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
