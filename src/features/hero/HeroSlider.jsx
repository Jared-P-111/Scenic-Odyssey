import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findByLabelText } from '@testing-library/dom';

const COLORS = ['#F72585', '#7209B7', '#3a0ca3', '#4361ee', '#4cc9f0'];

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = 0;

  const heroStyles = {
    color: 'red',
    height: '600px',
    width: '60vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS[index],
    exit: { opacity: 0 },
    drag: 'x',
  };

  const heroContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
  };

  return (
    <div style={heroContainer}>
      <AnimatePresence>
        <motion.div style={heroStyles} dragConstraints={{ left: 0, right: 0 }} drag="x" />
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
