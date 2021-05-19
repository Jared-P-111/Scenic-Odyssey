import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const NavPopupWord = ({ word, isOpen }) => {
  return (
    <span>
      {word.split('').map((char, index) => {
        return (
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <NavWordSty
              isOpen={isOpen}
              css={`
                animation: ${({ isOpen }) => (isOpen ? 'move-text 1s forwards' : '0')};
              `}
            >
              {char}
            </NavWordSty>
          </motion.span>
        );
      })}
    </span>
  );
};

const NavWordSty = styled.span`
  @keyframes move-text {
    0% {
      bottom: -5em;
      opacity: 1;
      color: #3e5c76;
    }

    50% {
      bottom: 5em;
      color: #ec058e;
    }

    100% {
      bottom: 0;
      opacity: 1;
      color: #cb3126;
    }
  }
`;

export default NavPopupWord;
