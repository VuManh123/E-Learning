import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';
import ContentManagementVideo from './ContentManagementVideo';
import Navbar from '../Navbar';

function ContentPageVideo() {
  return (
    <div>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc'>
        <div><Sidebar/></div>
        <div>
          <Box sx={{ mt: 4, px: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
          </Typography>
          <ContentManagementVideo />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContentPageVideo;
