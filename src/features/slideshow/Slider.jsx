import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import palmButton from '../../images/palmTreeButton.png';
import SLIDERIMAGES from './imageData';
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 800px;

  @media screen and (max-width: 1200px) {
    height: 600px;
  }

  @media screen and (max-width: 850px) {
    height: 400px;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const SliderStyles = styled(motion.img)`
  display: flex;
  object-position: center;
  max-width: 90vw;
  border: ${(props) => (props.click ? '4px solid #eb64b5' : '4px solid #6abaff')};
  box-shadow: ${(props) =>
    props.click
      ? '0px 15px 15px rgba(253, 82, 140, 0.3)'
      : '0px 15px 15px rgba(102, 186, 255, 0.3)'};
`;

const ButtonGrid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
`;
const PalmButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.reverse ? 'left' : 'right')};
  align-items: center;
  color: #eb64b5;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5rem;
  width: 100%;
`;

const PalmButton = styled(motion.button)`
  position: relative;
  background-image: url(${palmButton});
  background-repeat: no-repeat;
  background-color: black;
  background-size: 75% 75%;
  background-position: center;
  height: 100px;
  width: 100px;
  transform: ${(props) => (props.reverse ? 'scaleX(-1)' : null)};
  transition: 0.2s ease-in-out;
  z-index: 5;
  border: ${(props) => (props.click ? '4px solid #eb64b5' : '4px solid #6abaff')};
  border-radius: 15%;
  box-shadow: ${(props) =>
    props.click
      ? '15px 15px 15px rgba(253, 82, 140, 0.3)'
      : '15px 15px 15px rgba(102, 186, 255, 0.3)'};
  margin: 15px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 10;
    position: absolute;
    top: 0;
    border-radius: 15% 15% 5% 5%;
  }

  @media screen and (max-width: 900px) {
    width: 50px;
    height: 50px;
  }
`;

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [click, setClick] = useState(false);
  const IMAGES = SLIDERIMAGES;
  const imageIndex = wrap(0, IMAGES.length, page);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
    setClick(!click);
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

  return (
    <>
      <SlideContainer>
        <AnimatePresence custom={direction} exitBeforeEnter>
          <SliderStyles
            key={imageIndex}
            click={click}
            custom={direction}
            src={IMAGES[imageIndex]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', damping: 30 },
              duration: 0.4,
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
      </SlideContainer>
      <ButtonGrid>
        <PalmButtonContainer>
          <p style={{ padding: 10 }}>PREV</p>
          <PalmButton
            onClick={() => paginate(1)}
            type="button"
            click={click}
            onMousedDown={() => setClick(!click)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
          />
        </PalmButtonContainer>
        <PalmButtonContainer reverse>
          <PalmButton
            reverse
            onClick={() => paginate(1)}
            type="button"
            click={click}
            onMousedDown={() => setClick(!click)}
          />
          <p style={{ padding: 10 }}>NEXT</p>
        </PalmButtonContainer>
      </ButtonGrid>
    </>
  );
};

export default Slider;
