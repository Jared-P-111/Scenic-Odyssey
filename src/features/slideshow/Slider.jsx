import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import palmButton from '../../images/palmTreeButton.png';
import logo from '../../images/logo.png';
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
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transition: 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  `;

  const IMAGES = [logo, palmButton];
  const imageIndex = wrap(0, IMAGES.length, page);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 10 : -10,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0,
      display: 'none',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingBottom: 100,
    marginLeft: 'auto',
  };

  const sliderStyles = {
    width: '50%',
    height: 800,
  };

  return (
    <div style={sliderContainer}>
      <PalmButton onClick={() => paginate(1)} />
      <AnimatePresence custom={direction} initial={false}>
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
      <PalmButton reverse onClick={() => paginate(-1)} />
    </div>
  );
};

export default Slider;
