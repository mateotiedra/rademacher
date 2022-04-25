import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

// Import all the images
import imgCarousel1 from '../../assets/images/carousel/1.jpg';
import imgCarousel2 from '../../assets/images/carousel/2.jpg';
import imgCarousel3 from '../../assets/images/carousel/3.jpg';
import imgCarousel4 from '../../assets/images/carousel/4.jpg';
import imgCarousel5 from '../../assets/images/carousel/5.jpg';
import imgCarousel6 from '../../assets/images/carousel/6.jpg';
import imgCarousel7 from '../../assets/images/carousel/7.jpg';
import imgCarousel8 from '../../assets/images/carousel/8.jpg';
import imgCarousel9 from '../../assets/images/carousel/9.jpg';
import imgCarousel10 from '../../assets/images/carousel/10.jpg';
import imgCarousel11 from '../../assets/images/carousel/11.jpg';

function TitleSection() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Carousel
        imgComponents={[
          imgCarousel1,
          imgCarousel2,
          imgCarousel3,
          imgCarousel4,
          imgCarousel5,
          imgCarousel6,
          imgCarousel7,
          imgCarousel8,
          imgCarousel9,
          imgCarousel10,
          imgCarousel11,
        ]}
        sx={{
          position: 'absolute',
          zIndex: 10,
          height: '100%',
          width: '100%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          zIndex: 15,
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
  );
}

function WhoSection() {
  return (
    <>
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
      <SectionDivider />
    </>
  );
}

function PurposeHowSection() {
  return (
    <>
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
    </>
  );
}

// Page starts here

function Home() {
  return (
    <>
      <Navbar />
      <TitleSection />
      <SectionDivider />
      <WhoSection />
      <PurposeHowSection />
      <Footer />
    </>
  );
}

export default Home;
