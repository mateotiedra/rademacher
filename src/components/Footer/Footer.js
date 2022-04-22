import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import FooterLogic from './FooterLogic';

function Footer(props) {
  const {} = FooterLogic();
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth='sm'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography variant='body2' color='text.secondary'>
          {'Copyright © Lucas Rademacher '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
