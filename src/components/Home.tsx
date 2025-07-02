import React from 'react';
import { Box, Typography, Container, Button, Grid, Avatar } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import avatarImage from '../assets/avatar.JPG';
import backgroundImage from '../assets/background.png';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'vi' | 'en' | 'ja' | 'zh';
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(33, 33, 33, 0.7) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} sx={{ minHeight: '100vh', alignItems: 'center' }}>
          {/* Left side - Main content */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component={motion.h1}
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #FF5722, #FF8A65)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {profileData.name[lang]}
              </Typography>
              <Typography
                variant="h2"
                component={motion.h2}
                gutterBottom
                color="primary"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {profileData.title[lang]}
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {profileData.about[lang]}
              </Typography>
              <MotionBox
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  component={motion.a}
                  variant="contained"
                  color="primary"
                  size="large"
                  href={profileData.github}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    boxShadow: '0 4px 20px rgba(255, 87, 34, 0.3)',
                  }}
                >
                  <GitHub sx={{ mr: 1 }} />
                  GitHub
                </Button>
                <Button
                  component={motion.a}
                  variant="outlined"
                  color="primary"
                  size="large"
                  href={profileData.linkedin}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    borderWidth: 2,
                  }}
                >
                  <LinkedIn sx={{ mr: 1 }} />
                  LinkedIn
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>

          {/* Right side - Avatar */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                src={avatarImage}
                alt={profileData.name[lang]}
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 30px rgba(255, 87, 34, 0.3)',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 