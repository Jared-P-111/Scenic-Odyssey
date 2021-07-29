import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import palmButton from '../../images/palmTreeButton.png';
import SLIDERIMAGES from './imageData';
import styled from 'styled-components';

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const PalmButton = styled(motion.button)`
    background-image: url(${palmButton});
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    height: 100px;
    width: 100px;
    margin: 30px;
    transform: ${(props) => (props.reverse ? 'scaleX(-1)' : null)};
    border: none;
    border-radius: 30px;
    transition: 0.2s ease-in-out;

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
      scale: 0,
      zIndex: -100,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: () => ({
      opacity: 0,
      scale: 0,
      zIndex: -100,
    }),
  };
  // const divWrapper = {
  //   position: 'relative',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   width: '100vw',
  //   height: '800',
  //   backgroundColor: 'red',
  // };
  const sliderContainer = {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '800',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingBottom: 100,
    marginLeft: 'auto',
  };

  const sliderStyles = {
    width: 'auto',
    maxWidth: 1100,
    maxHeight: 800,
    height: 'auto',
  };

  const backDropDiv = {
    width: 1100,
    height: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={sliderContainer}>
      <PalmButton onClick={() => paginate(1)} />
      <div style={backDropDiv}>
        <AnimatePresence custom={direction} initial={false} exitBeforeEnter>
          <motion.img
            key={page}
            custom={direction}
            src={IMAGES[imageIndex]}
            style={sliderStyles}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
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
        </AnimatePresence>
      </div>
      <PalmButton reverse onClick={() => paginate(-1)} />
    </div>
  );
};

export default Slider;
