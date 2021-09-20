import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import banner from '../../images/sunsetTree.jpg';
import Mandala from '../animation-components/Mandala';

//Hero Header
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
`;

const HeroHeader = styled(motion.h1)`
  text-align: center;
  font-family: 'Zen Tokyo Zoo', cursive;
  text-transform: uppercase;
  padding-bottom: 10rem;
  font-size: 5rem;
  color: #e5b3fe;
  z-index: 4;

  @media screen and (max-width: 1300px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const HeroParagraphContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-basis: 100%;
`;

const HeroParagraph = styled(motion.p)`
  font-size: 2rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
  color: #e5b3fe;
  width: 50vw;
  padding-bottom: 50px;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    width: 90vw;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const inputSentence = 'Welcome to scenic odyssey';

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.07,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    textShadow:
      '2px 2px 8px #F72585, -2px -2px 8px #7209B7, 2px 2px 20px #3a0ca3, -2px -2px 20px #4361ee, 2px 2px 40px #4cc9f0',
    scale: 1,
  },
};

const paragraph = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.3,
      duration: 1.5,
    },
  },
};

const Hero = () => {
  return (
    <HeroContainer>
      <Mandala />
      <HeaderContainer>
        <HeroHeader variants={sentence} initial="hidden" animate="visible">
          {inputSentence.split('').map((char, index) => {
            return (
              <motion.span key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </HeroHeader>
      </HeaderContainer>
      <HeroParagraphContainer>
        <HeroParagraph variants={paragraph} initial="hidden" animate="visible" transition={1}>
          We stand for love and nature as we try to bring beautiful souls together through music and
          art. We believe in all genres and all types of art. We encourage all people to come visit
          and help us create community and spread love. Come embark on this emotional journey with
          us.
        </HeroParagraph>
      </HeroParagraphContainer>
    </HeroContainer>
  );
};

export default Hero;
