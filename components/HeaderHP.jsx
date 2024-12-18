import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        <Box>
          <Button color="inherit" onClick={() => navigate(-1)}>
            Quay lại
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
