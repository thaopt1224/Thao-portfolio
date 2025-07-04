import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Select, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import avatarImage from '../assets/avatar.JPG';
import { useTranslation } from 'react-i18next';
import type { SelectChangeEvent } from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import QRCode from 'qrcode';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const contactUrl = 'https://thaopt1224.github.io/Thao-portfolio/#/contact';

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(contactUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#FF5722',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleChangeLang = (event: SelectChangeEvent) => {
    const newLang = event.target.value as string;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleShare = async () => {
    if (navigator.share && navigator.canShare && qrCodeUrl) {
      try {
        // Convert QR code data URL to blob
        const response = await fetch(qrCodeUrl);
        const blob = await response.blob();
        const file = new File([blob], 'contact-qr-code.png', { type: 'image/png' });

        // Check if sharing files is supported
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Thaopt.1224 - Contact QR Code',
            text: 'Scan this QR code to access my contact information!',
            url: contactUrl,
            files: [file]
          });
        } else {
          // Fallback: share without file
          await navigator.share({
            title: 'Thaopt.1224 - Contact',
            text: 'Check out my portfolio and contact information!',
            url: contactUrl,
          });
        }
      } catch (err) {
        console.error('Error sharing:', err);
        // Fallback to copy link
        try {
          await navigator.clipboard.writeText(contactUrl);
          alert('Link copied to clipboard!');
        } catch (copyErr) {
          console.error('Failed to copy link:', copyErr);
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(contactUrl);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
          
          {/* Share Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShareIcon />}
            component={Link}
            to="/share"
            sx={{
              ml: 1,
              px: 2,
              py: 0.5,
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: '0 2px 10px rgba(255, 87, 34, 0.3)',
              '&:hover': {
                boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease-in-out',
              color: isActive('/share') ? 'primary.main' : 'white',
              backgroundColor: isActive('/share') ? 'white' : 'primary.main',
            }}
          >
            {t('header.share')}
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