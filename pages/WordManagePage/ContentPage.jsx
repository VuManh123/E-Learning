import { Box, Typography } from '@mui/material';
import React from 'react';
import HeaderHP from '../../components/HeaderHP';
import ContentManagement from './ContentManagement';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

function ContentPage() {
  return (
    <div>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc'>
        <div><Sidebar/></div>
        <div style={{flexGrow: "1"}}>
          <Box sx={{ mt: 4, px: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
            </Typography>
            <ContentManagement />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
