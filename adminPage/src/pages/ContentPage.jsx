import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentManagement from '../components/ContentManagement';
import Header from '../components/Header';

function ContentPage() {
  return (
    <div>
      <Header />
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Quản Lý Nội Dung Học Tập
        </Typography>
        <ContentManagement />
      </Box>
    </div>
  );
}

export default ContentPage;
