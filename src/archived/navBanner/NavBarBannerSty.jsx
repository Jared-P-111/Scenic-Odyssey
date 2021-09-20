import banner from '../../../images/bannerImg.webp';
import logo from '../../../images/logo.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBarBannerSty = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: auto;
  height: 125px;
  border-bottom: 8px solid #525fcf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoSty = styled(motion.div)`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    background-image: url(${logo});
    background-color: lightblue;
    background-position: center;
    background-size: cover;
    transition: all 1s ease-in-out;
    border-radius: 100%;
    border: 5px solid black;
    flex-shrink: 0;
    filter: saturate(150%);
  }
`;
