import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import palmButton from '../../images/palmTreeButton.png';
import SLIDERIMAGES from './imageData';
import styled from 'styled-components';

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const PalmButton = styled.button`
    background-image: url(${palmButton});
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;
    height: 100px;
    width: 100%;
    margin: auto;
    transform: ${(props) => (props.reverse ? 'scaleX(-1)' : null)};
    border: none;
    border-radius: 30px;
    transition: 0.2s ease-in-out;
    z-index: 10;

    @media screen and (max-width: 1000px) {
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  `;

  const IMAGES = SLIDERIMAGES;
  const imageIndex = wrap(0, IMAGES.length, page);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const variants = {
    enter: () => ({
      opacity: 0,
    }),
    center: {
      opacity: 1,
    },
    exit: () => ({
      opacity: 0,
    }),
  };

  const SlideContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding-bottom: 100px;
    margin-left: auto;
  `;

  const SliderStyles = styled(motion.img)`
    object-fit: cover;
    height: 100%;
    width: auto;
  `;

  const BackDropDiv = styled.div`
    width: 70vw;
    height: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
      width: 90vw;
    }
  `;

  return (
    <SlideContainer>
      <AnimatePresence custom={direction} exitBeforeEnter>
        <BackDropDiv>
          <PalmButton onClick={() => paginate(1)} />
          <SliderStyles
            key={page}
            custom={direction}
            src={IMAGES[imageIndex]}
            // style={sliderStyles}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', damping: 30 },
              duration: 1,
            }}
            dragConstraints={{ left: 1, right: 1 }}
            dragElastic={0.5}
            drag="x"
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 200) {
                paginate(-1);
              } else if (offset.x < -200) {
                paginate(1);
              }
            }}
          />
          <PalmButton reverse onClick={() => paginate(-1)} />
        </BackDropDiv>
      </AnimatePresence>
    </SlideContainer>
  );
};

export default Slider;
