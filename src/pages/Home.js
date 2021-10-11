import React, { useState } from 'react';
import Navbar from '../features/nav/navBar/NavBar';
import NavPopup from '../features/nav/navPopup/NavPopup';
import Hero from '../features/hero/Hero';
import Slideshow from '../features/slideshow/Slideshow';
import Image from '../features/image-container/imageContainer';
import SoundCloudFeature from '../features/sound-cloud-feature/sound-cloud-feature';
import VideoPlayerFeature from '../features/video-player-feature/video-player-feature';

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
      <Image />
      <Slideshow />
      <SoundCloudFeature />
      <VideoPlayerFeature />
    </div>
  );
};
