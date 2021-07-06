import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const NavPopupWord = ({ word, isOpen }) => {
  return (
    <motion.div
      className="load-screen--message"
      variants={sentence}
      initial="hidden"
      animate={isOpen ? 'visible' : ''}
    >
      {word.split('').map((char, index) => {
        return (
          <NavWordSty>
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          </NavWordSty>
        );
      })}
    </motion.div>
  );
};

const NavWordSty = styled.span`
  color: #525fcf;

  &:hover {
    color: #eb64b5;

    text-shadow: 2px 2px 8px #eb64b5, -2px -2px 8px #eb64b5, 2px 2px 20px #eb64b5,
      -2px -2px 20px #eb64b5, 2px 2px 40px #eb64b5, -2px -2px 40px #eb64b5;
  }
`;

export default NavPopupWord;
