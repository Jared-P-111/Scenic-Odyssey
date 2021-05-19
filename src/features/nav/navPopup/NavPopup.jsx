import React from 'react';
import {
  NavPopupContainer,
  Icon,
  CloseIcon,
  NavPopupWrapper,
  NavPopupMenu,
  NavPopupLink,
} from './NavPopupSty';
import NavPopupWord from './NavPopupWord';

const NavPopup = ({ isOpen, toggle }) => {
  return (
    <NavPopupContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} isOpen={isOpen}>
        <CloseIcon />
      </Icon>
      <NavPopupWrapper>
        <NavPopupMenu>
          <NavPopupLink to="/tickets" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="Tickets" isOpen={isOpen} />
          </NavPopupLink>
          <NavPopupLink to="/camping" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="Camping" isOpen={isOpen} />
          </NavPopupLink>
          <NavPopupLink to="/artists" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="Artists" isOpen={isOpen} />
          </NavPopupLink>
          <NavPopupLink to="/media" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="Media" isOpen={isOpen} />
          </NavPopupLink>
          <NavPopupLink to="/about" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="About" isOpen={isOpen} />
          </NavPopupLink>
          <NavPopupLink to="/vendors" onClick={toggle} isOpen={isOpen}>
            <NavPopupWord word="Vendors" isOpen={isOpen} />
          </NavPopupLink>
        </NavPopupMenu>
      </NavPopupWrapper>
    </NavPopupContainer>
  );
};

export default NavPopup;
