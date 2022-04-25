import { useEffect, useState } from 'react';

const CarouselLogic = ({ imgComponents, timeBetween }) => {
  const [imgShift, setImgShift] = useState(0);
  timeBetween = timeBetween || 4000;

  useEffect(() => {
    setTimeout(
      () => setImgShift((imgShift + 1) % imgComponents.length),
      timeBetween
    );
  }, [imgShift, setImgShift]);

  const getImgData = () => {
    return {
      component: imgComponents[imgShift],
      opacity: 1,
    };
  };

  return { imgData: getImgData() };
};

export default CarouselLogic;
