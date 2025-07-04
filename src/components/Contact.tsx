import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper, Link, Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Facebook, Instagram, QrCode } from '@mui/icons-material';
import { profileData } from '../data/profile';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'vi' | 'en' | 'ja' | 'zh';
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [qrType, setQrType] = useState('vcard');

  const generateQRCode = async (type: string) => {
    let data = '';
    
    switch (type) {
      case 'vcard':
        // vCard format
        data = `BEGIN:VCARD
VERSION:3.0
FN:${profileData.name[lang]}
TEL:${profileData.phone}
EMAIL:${profileData.email}
URL:${profileData.github}
ADR:;;${profileData.location[lang]}
END:VCARD`;
        break;
      case 'email':
        data = `mailto:${profileData.email}`;
        break;
      case 'phone':
        data = `tel:${profileData.phone}`;
        break;
      case 'website':
        data = window.location.origin;
        break;
      case 'facebook':
        data = 'https://www.facebook.com/thaopt.1224/';
        break;
      case 'instagram':
        data = 'https://www.instagram.com/thaopt.1224/';
        break;
      default:
        data = `mailto:${profileData.email}`;
    }

    try {
      const url = await QRCode.toDataURL(data, {
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

  useEffect(() => {
    if (qrDialogOpen) {
      generateQRCode(qrType);
    }
  }, [qrDialogOpen, qrType, lang]);

  const handleQrTypeChange = (event: any) => {
    setQrType(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('contact.title')}
      </Typography>
      
      {/* QR Code Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<QrCode />}
          onClick={() => setQrDialogOpen(true)}
          sx={{ px: 4, py: 1.5, borderRadius: '30px' }}
        >
          {t('contact.qrCode')}
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              {t('contact.info')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email color="primary" />
                <Link href={`mailto:${profileData.email}`} color="inherit">
                  {profileData.email}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone color="primary" />
                <Link href={`tel:${profileData.phone}`} color="inherit">
                  {profileData.phone}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn color="primary" />
                <Typography>{profileData.location[lang]}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              {t('contact.social')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GitHub color="primary" />
                <Link href={profileData.github} target="_blank" color="inherit">
                  GitHub
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LinkedIn color="primary" />
                <Link href={profileData.linkedin} target="_blank" color="inherit">
                  LinkedIn
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Facebook color="primary" />
                <Link href="https://www.facebook.com/thaopt.1224/" target="_blank" color="inherit">
                  {t('contact.facebook')}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Instagram color="primary" />
                <Link href="https://www.instagram.com/thaopt.1224/" target="_blank" color="inherit">
                  {t('contact.instagram')}
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* QR Code Dialog */}
      <Dialog open={qrDialogOpen} onClose={() => setQrDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{t('contact.qrCode')}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>{t('contact.qrType')}</InputLabel>
              <Select
                value={qrType}
                label={t('contact.qrType')}
                onChange={handleQrTypeChange}
              >
                <MenuItem value="vcard">{t('contact.qrVCard')}</MenuItem>
                <MenuItem value="email">{t('contact.qrEmail')}</MenuItem>
                <MenuItem value="phone">{t('contact.qrPhone')}</MenuItem>
                <MenuItem value="website">{t('contact.qrWebsite')}</MenuItem>
                <MenuItem value="facebook">{t('contact.qrFacebook')}</MenuItem>
                <MenuItem value="instagram">{t('contact.qrInstagram')}</MenuItem>
              </Select>
            </FormControl>
            
            {qrCodeUrl && (
              <Box sx={{ textAlign: 'center' }}>
                <img src={qrCodeUrl} alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {t('contact.qrScan')}
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setQrDialogOpen(false)}>
            {t('contact.close')}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Contact; 