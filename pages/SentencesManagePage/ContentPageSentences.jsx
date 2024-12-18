import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentManagementS from './ContentManagementS';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ContentPageSentences() {
  return (
    <div>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc'>
        <div><Sidebar/></div>
        <div style={{alignItems: "center", justifyContent: "center"}}>
          <Box sx={{ mt: 4, px: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
            </Typography>
            <ContentManagementS />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContentPageSentences;
