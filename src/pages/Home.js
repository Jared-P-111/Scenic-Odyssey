import React, { useState } from 'react';
import Navbar from '../features/nav/navBar/NavBar';
import NavPopup from '../features/nav/navPopup/NavPopup';
import Hero from '../features/hero/Hero';
import Slideshow from '../features/slideshow/Slideshow';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavPopup isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Slideshow />
    </div>
  );
};
