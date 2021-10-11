import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TiTicket, TiInfo } from 'react-icons/ti';
import { GiCampingTent, GiMusicalNotes } from 'react-icons/gi';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.3,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
    textShadow: '2px 2px 8px #eb64b5, -2px -2px 8px #eb64b5',
  },
  visible: {
    opacity: 1,
    y: 0,
    textShadow: '2px 2px 8px #525fcf, -2px -2px 8px #525fcf',
  },
};

const NavWordSty = styled(motion.div)`
  color: #525fcf;
  display: flex;
  font-size: 25px;

  &:hover {
    color: #eb64b5;
    text-shadow: 2px 2px 8px #eb64b5, -2px -2px 8px #eb64b5, 2px 2px 20px #eb64b5,
      -2px -2px 20px #eb64b5, 2px 2px 40px #eb64b5, -2px -2px 40px #eb64b5;
  }
`;

const NavWordContainer = styled(motion.div)`
  display: flex;
  padding-left: 20px;
`;
const NavPopupWord = ({ word, isOpen, icon }) => {
  const Icon = icon;
  return (
    <NavWordContainer variants={sentence} initial="hidden" animate={isOpen ? 'visible' : ''}>
      {word.split('').map((char, index) => {
        return (
          <NavWordSty key={char + '-' + index} variants={letter}>
            {char}
          </NavWordSty>
        );
      })}
    </NavWordContainer>
  );
};

export default NavPopupWord;
