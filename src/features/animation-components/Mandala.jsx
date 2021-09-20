import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import mandala from '../../animations/mandala.json';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MandalaStyles = styled(motion.div)`
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);

  @media screen and (max-width: 1300px) {
    transform: translate(-50%, 10%);
  }

  @media screen and (max-width: 800px) {
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

const Mandala = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#mandala-animation'),
      animationData: mandala,
      loop: false,
    });
  }, []);

  return (
    <MandalaStyles>
      <motion.div
        id="mandala-animation"
        initial="visible"
        animate="hidden"
        variants={mandalaAnimation}
        transition={{ duration: 2, delay: 1.2 }}
      ></motion.div>
    </MandalaStyles>
  );
};

export default Mandala;
