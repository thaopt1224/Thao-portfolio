import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn } from '@mui/icons-material';
import { profileData } from '../data/profile';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        Liên Hệ
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Thông Tin Liên Hệ
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
                <Typography>{profileData.location}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Mạng Xã Hội
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
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 