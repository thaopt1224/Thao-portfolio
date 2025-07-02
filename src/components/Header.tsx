import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Select, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import avatarImage from '../assets/avatar.JPG';
import { useTranslation } from 'react-i18next';
import type { SelectChangeEvent } from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleChangeLang = (event: SelectChangeEvent) => {
    const newLang = event.target.value as string;
    setLang(newLang);
    i18n.changeLanguage(newLang);
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
            {t('header.home')}
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
            {t('header.about')}
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
            {t('header.projects')}
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
            {t('header.contact')}
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <LanguageIcon sx={{ color: 'white', mr: 1 }} />
            <Select
              value={lang}
              onChange={handleChangeLang}
              size="small"
              sx={{ color: 'white', borderColor: 'white', minWidth: 80, '.MuiSvgIcon-root': { color: 'white' } }}
            >
              <MenuItem value="vi">VI</MenuItem>
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ja">日本語</MenuItem>
              <MenuItem value="zh">中文</MenuItem>
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 