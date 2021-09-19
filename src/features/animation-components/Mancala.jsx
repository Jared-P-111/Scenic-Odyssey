import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import mancala from '../../animations/mancala.json';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MancalaStyles = styled(motion.div)`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);

  @media screen and (max-width: 1300px) {
    width: 65%;
    height: 65%;
    transform: translate(-50%, 10%);
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 80%;
    transform: translate(-50%, 10%);
  }
`;

const mandalaAnimation = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  transition: {
    delay: 2,
    duration: 1.5,
  },
};

const Mancala = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#mancala-animation'),
      animationData: mancala,
      loop: false,
    });
  }, []);

  return (
    <MancalaStyles>
      <motion.div
        id="mancala-animation"
        initial="visible"
        animate="hidden"
        variants={mandalaAnimation}
        transition={{ duration: 2, delay: 1.2 }}
      ></motion.div>
    </MancalaStyles>
  );
};

export default Mancala;
