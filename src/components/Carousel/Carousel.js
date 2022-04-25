import { Box } from '@mui/material';
import React from 'react';

import CarouselLogic from './CarouselLogic';

function Carousel({ imgComponents, sx }) {
  console.log(imgComponents);
  const { imgsData } = CarouselLogic({ imgComponents });
  return (
    <Box sx={sx}>
      {imgsData.map((imgData) => (
        <Box
          sx={{
            position: 'absolute',
            zIndex: sx && sx.zIndex ? sx.zIndex : 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${imgData.component})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: imgData.opacity,
          }}
        />
      ))}
    </Box>
  );
}

export default Carousel;
