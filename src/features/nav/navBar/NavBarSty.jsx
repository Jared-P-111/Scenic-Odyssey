import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as LinkR } from 'react-router-dom';
import logo from '../../../images/logo.png';

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 10px;
  border-bottom: 8px solid #525fcf;
  backface-visibility: none;
  position: relative;

  @media screen and (max-width: 490px) {
    height: 40px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NavLink = styled(LinkR)`
  position: absolute;
  height: 50%;
  font-family: 'Bebas Neue', cursive;
  display: flex;
  justify-content: center;
  align-self: center;
  letter-spacing: 4px;
  align-items: center;
  background: rgba(0, 0, 0);
  font-size: 17px;
  color: #6abaff;
  text-decoration: none;
  width: 180px;
  padding: 0 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  margin-left: 3px;
  margin-right: 3px;
  box-shadow: 0 10px 10px rgba(102, 186, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 4px;
  flex-grow: 0;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.5s ease-in-out;
    backdrop-filter: blur(30px);
    z-index: -1;
  }

  /* &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #eb64b5;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    z-index: -1000;
  } */

  &:hover {
    box-shadow: 0 10px 10px rgba(253, 82, 140, 0.3);
    color: #eb64b5;

    @media screen and (max-width: 800px) {
      width: 80px;
      font-size: 12px;
    }

    &:before {
      transition: all 0.5s ease-in-out;
    }

    &:after {
      bottom: 0;
      width: 80%;
      border-radius: 30px;
      transform: translateY(50%);
      transform: translateX(-50%);
      transition: all 0.5s ease-in-out;
      background: #eb64b5;
    }
  }

  @media screen and (max-width: 490px) {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 80px;
    font-size: 10px;
  }
`;

export const BtnBackDropDiv = styled(motion.div)`
  bottom: 24px;
  width: ${(props) => (props.toggleDiv ? '40px' : '100px')};
  height: 20px;
  background-color: #eb64b5;
  position: absolute;
  border-radius: 15%;
`;

export const Logo = styled.div`
  height: 250px;
  width: 250px;
  background-image: url(${logo});
  background-color: lightblue;
  background-position: auto;
  background-size: cover;
  transition: all 1s ease-in-out;
  border-radius: 100%;
  border: 3px solid black;
  flex-shrink: 0;
  filter: saturate(150%);

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 490px) {
    display: inline-block;
    margin-right: 15px;
    color: white;
    position: absolute;
    right: 0;
  }

  &:hover {
    color: #eb64b5;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-right: 5px;
  }
`;
