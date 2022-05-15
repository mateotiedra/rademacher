import { Typography, Link, Box, Button } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const emailAdress = 'contact@rademacher-lucas.ch';

function TitleSection() {
  return (
    <>
      <SectionContainer>
        <Typography variant='h1' sx={{ mb: 1 }}>
          Me contacter
        </Typography>
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

function ScheduleSection() {
  return (
    <>
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 1 }}>
          Horaire
        </Typography>
        <Typography variant='body1'>
          {
            "Ouvert le mercredi de 10h à 17h non-stop. Rendez-vous par email, à l'adresse suivante : "
          }
          <Link href={'mailto:' + emailAdress}>{emailAdress}</Link>
          {' le reste de la semaine.'}
        </Typography>
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

function PlaceSection() {
  return (
    <>
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 1 }}>
          Adresse
        </Typography>
        <Link variant='body1' href='https://goo.gl/maps/w7u2sDEkztnjTiCYA'>
          Chemin Buisson 10, 1202 Genève
        </Link>
        <Box
          component='iframe'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.6590573956014!2d6.121173416526721!3d46.217236990898925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64c03b152a9b%3A0x8492aef033ce11b7!2sChem.%20Buisson%2010%2C%201202%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1650909420475!5m2!1sfr!2sch'
          title='adress-map'
          loading='lazy'
          sx={{
            width: '100%',
            height: 600,
            mt: 3,
          }}
        />
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

function FloatingButton() {
  return (
    <Button
      variant='contained'
      disableElevation
      size='large'
      sx={{
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      }}
      component='a'
      href={'mailto:' + emailAdress}
    >
      Me contacter
    </Button>
  );
}

function Contact() {
  return (
    <>
      <Navbar />
      <SectionDivider h={2} />
      <TitleSection />
      <ScheduleSection />
      <PlaceSection />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default Contact;
