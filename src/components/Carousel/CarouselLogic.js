import { useEffect, useRef, useState } from 'react';

const CarouselLogic = ({ imgComponents, timeBetween }) => {
  const imgShift = useRef(0);
  timeBetween = timeBetween || 4;

  const [seconds, setSeconds] = useState(timeBetween);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      imgShift.current++;
      imgShift.current = imgShift.current % imgComponents.length;
      setSeconds(timeBetween);
    }
  }, [imgShift, seconds]);

  const getImgData = () => {
    let imgsData = [];
    for (let imgIndex = 0; imgIndex < 2; imgIndex++) {
      imgsData.push({
        component: imgComponents[imgIndex + imgShift.current],
        opacity: 1,
      });
    }
    return imgsData;
  };

  return { imgsData: getImgData() };
};

export default CarouselLogic;
