import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Trang chủ
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Giới thiệu
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Dự án
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Liên hệ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 