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

//This needs to be mapped FOR DRY!
const NavPopup = ({ isOpen, toggle }) => {
  return (
    <NavPopupContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <NavPopupWrapper>
        <NavPopupMenu>
          <NavPopupLink to="/tickets" onClick={toggle}>
            <NavPopupWord word="Tickets" isOpen={isOpen} icon={'TiTicket'} />
          </NavPopupLink>
          <NavPopupLink to="/camping" onClick={toggle}>
            <NavPopupWord word="Camping" isOpen={isOpen} icon={'GiCampingTent'} />
          </NavPopupLink>
          <NavPopupLink to="/artists" onClick={toggle}>
            <NavPopupWord word="Artists" isOpen={isOpen} icon={'GiMusicalNotes'} />
          </NavPopupLink>
          <NavPopupLink to="/media" onClick={toggle}>
            <NavPopupWord word="Scenery" isOpen={isOpen} icon={'GiPalmTree'} />
          </NavPopupLink>
          <NavPopupLink to="/about" onClick={toggle}>
            <NavPopupWord word="About" isOpen={isOpen} icon={'TiInfo'} />
          </NavPopupLink>
          <NavPopupLink to="/vendors" onClick={toggle}>
            <NavPopupWord word="Vendors" isOpen={isOpen} icon={'BiPurchaseTag'} />
          </NavPopupLink>
        </NavPopupMenu>
      </NavPopupWrapper>
    </NavPopupContainer>
  );
};

export default NavPopup;
