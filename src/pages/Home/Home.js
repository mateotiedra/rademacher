import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import { Box } from '@mui/system';
import imgCarousel1 from '../../assets/images/home-carousel-1.jpeg';
import { Link, Typography } from '@mui/material';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '65vh',
          backgroundImage: `url(${imgCarousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 10,
            height: '100%',
            width: '100%',
            backgroundColor: 'background.default',
            opacity: 0.7,
          }}
        />
        <SectionContainer sx={{ zIndex: 15 }}>
          <Typography variant='h1'>Audio électronique Rademacher</Typography>
        </SectionContainer>
      </Box>
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Qui suis-je ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Je m'appelle Lucas Rademacher et je suis né en 1998 à Genève, ville
          dans laquelle j'habite depuis toujours. J'ai achevé ma formation en
          génie électrique, spécialisation électronique, au Centre de
          Professionnel et Technique en juin 2021, et je souhaite donc me lancer
          mon compte. Depuis mon plus jeune âge, je suis passionné de musique ;
          je suis guitariste depuis une dizaine d'années et, depuis peu,
          ingénieur du son. Je suis donc souvent amené à me servir de divers
          matériels, qui m'intéressent tant par leur utilité que par leur
          fonctionnement.
        </Typography>
      </SectionContainer>

      <SectionDivider id='horaires' />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Quel est mon but ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Je propose un service de réparation et d'entretien de matériel audio.
          Ceci me permettra d'allier mon métier et ma passion, le tout pour une
          noble cause : réparer, plutôt que jeter.
        </Typography>
      </SectionContainer>

      <SectionDivider id='contact' />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Comment ça marche ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Vous avez un appareil défectueux ? Prenez contact avec moi ! Les
          réparations se déroulent en deux temps : un devis est d'abord effectué
          (50CHF), puis, après validation, j'effectue les réparations pour un
          tarif de 50 CHF/heure.
        </Typography>
      </SectionContainer>
      <SectionDivider />
      <Footer />
    </>
  );
}

export default Home;
