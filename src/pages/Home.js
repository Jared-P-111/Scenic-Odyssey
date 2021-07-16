import React, { useState } from 'react';
import Navbar from '../features/nav/navBar/NavBar';
import NavBarBanner from '../features/nav/navBanner/NavBarBanner';
import NavPopup from '../features/nav/navPopup/NavPopup';
import HeroSlider from '../features/hero/HeroSlider';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavPopup isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <NavBarBanner />
      <HeroSlider />
    </div>
  );
};
