import React from 'react';
import { Typography, Box } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

import { FiZoomIn } from 'react-icons/fi';

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
        <Typography variant='h1'>Audio ??lectronique Rademacher</Typography>
      </SectionContainer>
    </Box>
  );
}

function WhoSection() {
  let images = [
    {
      url: '/images/diploma.jpg',
      caption: "Dipl??me d'??cole sup??rieur au CFPT",
    },
    {
      url: '/images/lucas-rademacher.jpeg',
      caption: 'Lucas Rademacher',
    },
  ];

  const openImage = (url) => {
    window.open(url);
  };

  return (
    <>
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Qui suis-je ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Je m'appelle Lucas Rademacher et je suis n?? en 1998 ?? Gen??ve, ville
          dans laquelle j'habite depuis toujours. J'ai achev?? ma formation en
          g??nie ??lectrique, sp??cialisation ??lectronique, au Centre de Formation
          Professionnelle et Technique en juin 2021, et je souhaite donc me
          lancer mon compte. Depuis mon plus jeune ??ge, je suis passionn?? de
          musique; je suis guitariste depuis une dizaine d'ann??es et, depuis
          peu, ing??nieur du son. Je suis donc souvent amen?? ?? me servir de
          divers mat??riels, qui m'int??ressent tant par leur utilit?? que par leur
          fonctionnement.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            mt: 3,
          }}
        >
          {images.map((image) => (
            <Box
              onClick={() => {
                openImage(image.url);
              }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  cursor: 'zoom-in',
                },
              }}
            >
              <Box
                component={FiZoomIn}
                color='black'
                size={40}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  m: 1,
                  zIndex: 20,
                }}
              />
              <Box
                key='imageUrl'
                component='img'
                src={image.url}
                sx={{
                  height: 400,
                }}
              />
              <Typography
                variant='caption'
                sx={{
                  color: 'text.secondary',
                  mt: 1,
                }}
              >
                {image.caption}
              </Typography>
            </Box>
          ))}
        </Box>
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
          Je propose un service de r??paration et d'entretien de mat??riel audio.
          Ceci me permettra d'allier mon m??tier et ma passion, le tout pour une
          noble cause : r??parer, plut??t que jeter.
        </Typography>
      </SectionContainer>

      <SectionDivider id='contact' />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Comment ??a marche ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Vous avez un appareil d??fectueux ? Prenez contact avec moi ! Les
          r??parations se d??roulent en deux temps : un devis est d'abord effectu??
          (50 CHF), puis, apr??s validation, j'effectue les r??parations pour un
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
