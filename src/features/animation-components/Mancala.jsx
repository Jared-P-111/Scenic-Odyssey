import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import mancala from '../../animations/mancala.json';

const mancalaStyles = {
  width: '50%',
  height: '100%',
};

const Mancala = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#mancala-animation'),
      animationData: mancala,
    });
  }, []);

  return <div id="mancala-animation" style={mancalaStyles}></div>;
};

export default Mancala;
