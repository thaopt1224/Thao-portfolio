import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Button, Grid } from '@mui/material';
import { Share as ShareIcon, QrCode, ContentCopy, CheckCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode';

const Share: React.FC = () => {
  const { t } = useTranslation();
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);

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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(contactUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share && navigator.canShare) {
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
        handleCopyLink();
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopyLink();
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
        {t('share.title')}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
              {t('share.qrTitle')}
            </Typography>
            
            {qrCodeUrl && (
              <Box sx={{ mb: 3 }}>
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
              </Box>
            )}

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {t('share.qrDescription')}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={copied ? <CheckCircle /> : <ContentCopy />}
                onClick={handleCopyLink}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(255, 87, 34, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 87, 34, 0.4)',
                  }
                }}
              >
                {copied ? t('share.copied') : t('share.copyLink')}
              </Button>

              <Button
                variant="outlined"
                color="primary"
                startIcon={<ShareIcon />}
                onClick={handleShare}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  }
                }}
              >
                {t('share.share')}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Share; 