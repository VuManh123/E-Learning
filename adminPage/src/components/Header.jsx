import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Thêm logic đăng xuất (xóa token, chuyển trang)
    console.log("User logged out");
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/home">
            Trang chủ
          </Button>
          <Button color="inherit" component={Link} to="/users">
            Quản lý người dùng
          </Button>
          <Button color="inherit" component={Link} to="/content">
            Quản lý nội dung
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
