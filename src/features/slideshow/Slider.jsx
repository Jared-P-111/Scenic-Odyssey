import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const COLORS = ['#F72585', '#7209B7', '#3a0ca3', '#4361ee', '#4cc9f0'];
  const colorsIndex = wrap(0, COLORS.length, page);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? -100 : 100,
      opacity: 0,
      display: 'none',
    }),
  };

  const sliderContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100,
    paddingBottom: 200,
  };

  const slideStyles = {
    height: '35rem',
    backgroundColor: COLORS[colorsIndex],
    width: 800,
  };

  return (
    <div style={sliderContainer}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          style={slideStyles}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
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
  );
};

export default Slider;
