import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Box } from '@mui/material';
import { profileData } from '../data/profile';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'vi' | 'en' | 'ja' | 'zh';
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('projects.title')}
      </Typography>
      <Grid container spacing={4}>
        {profileData.projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.imageUrl}
                alt={project.title[lang]}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title[lang]}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description[lang]}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.githubUrl} target="_blank">
                  GitHub
                </Button>
                {project.demoUrl && (
                  <Button size="small" color="primary" href={project.demoUrl} target="_blank">
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 