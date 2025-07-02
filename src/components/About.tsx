import React from 'react';
import { Container, Typography, Grid, Paper, Box, Chip } from '@mui/material';
import { School, Code, CardMembership, Language } from '@mui/icons-material';
import { profileData } from '../data/profile';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'vi' | 'en' | 'ja' | 'zh';
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('about.title')}
      </Typography>
      
      {/* Học vấn */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <School color="primary" />
          {t('about.education')}
        </Typography>
        <Grid container spacing={3}>
          {profileData.education.map((edu) => (
            <Grid item xs={12} key={edu.id}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  {edu.school[lang]}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {edu.degree[lang]} - {edu.field[lang]}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {edu.startDate} - {edu.endDate}
                </Typography>
                <Typography variant="body1">
                  {edu.description[lang]}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bằng cấp */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CardMembership color="primary" />
          {t('about.certificates')}
        </Typography>
        <Grid container spacing={3}>
          {profileData.certificates.map((cert) => (
            <Grid item xs={12} sm={6} key={cert.id}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  {cert.name[lang]}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {cert.issuer[lang]}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {cert.date}
                </Typography>
                <Typography variant="body1">
                  {cert.description[lang]}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Ngoại ngữ */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Language color="primary" />
          {t('about.languages')}
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {profileData.languages.map((langObj, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'primary.main', borderRadius: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {langObj.name[lang]}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {langObj.level}
                  </Typography>
                  {langObj.certificate && (
                    <Typography variant="body2" color="text.secondary">
                      {langObj.certificate[lang]}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      {/* Kỹ năng */}
      <Box>
        <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Code color="primary" />
          {t('about.skills')}
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {profileData.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{ fontSize: '1rem', py: 2 }}
              />
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 