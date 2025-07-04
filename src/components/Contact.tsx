import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Facebook, Instagram } from '@mui/icons-material';
import { profileData } from '../data/profile';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'vi' | 'en' | 'ja' | 'zh';
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('contact.title')}
      </Typography>
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
    </Container>
  );
};

export default Contact; 