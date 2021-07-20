import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { NavLink as LinkR } from 'react-router-dom';

export const NavPopupContainer = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.nav`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const NavPopupWrapper = styled.div`
  color: #fff;
`;

export const NavPopupMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const NavPopupLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  /* opacity: ${({ isOpen }) => (isOpen ? '100' : '0')}; */
  /* transition: opacity ${({ isOpen }) => (isOpen ? '3s' : '0')}; */
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Zen Tokyo Zoo', cursive;
  font-size: 2.3rem;
  letter-spacing: 20px;
  text-transform: uppercase;
`;
