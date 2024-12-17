import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

function LoginForm() {
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" align="center">Đăng Nhập</Typography>
      <TextField label="Tên đăng nhập" variant="outlined" />
      <TextField label="Mật khẩu" type="password" variant="outlined" />
      <Button variant="contained" color="primary">Đăng Nhập</Button>
    </Box>
  );
}

export default LoginForm;
