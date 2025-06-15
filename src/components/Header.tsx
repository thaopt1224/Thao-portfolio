import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import avatarImage from '../assets/avatar.JPG';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
         
          {location.pathname !== '/' && (
            <Avatar
              src={avatarImage}
              alt="Thaopt"
              sx={{
                width: 32,
                height: 32,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            />
          )}
           <Typography variant="h6" component="div">
            thaopt.1224
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{ 
              color: isActive('/') ? 'primary.main' : 'inherit',
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            Trang chủ
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            sx={{ 
              color: isActive('/about') ? 'primary.main' : 'inherit',
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            Giới thiệu
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/projects"
            sx={{ 
              color: isActive('/projects') ? 'primary.main' : 'inherit',
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            Dự án
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact"
            sx={{ 
              color: isActive('/contact') ? 'primary.main' : 'inherit',
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            Liên hệ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 