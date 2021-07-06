import React from 'react';
import { Nav, NavLink, Logo, MobileIcon, NavIcon } from './NavBarSty';
import { FaBars } from 'react-icons/fa';
import { TiTicket, TiInfo } from 'react-icons/ti';
import { GiCampingTent, GiMusicalNotes } from 'react-icons/gi';
import { MdPermMedia } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';

function NavBar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/tickets">
        <NavIcon>
          <span>Tickets</span>
          <TiTicket />
        </NavIcon>
      </NavLink>
      <NavLink to="/camping">
        <NavIcon>
          <span>Camping</span>
          <GiCampingTent />
        </NavIcon>
      </NavLink>
      <NavLink to="/artists">
        <NavIcon>
          <span>Artists</span>
          <GiMusicalNotes />
        </NavIcon>
      </NavLink>
      <Logo />
      <NavLink to="/media">
        <NavIcon>
          <span>Scenery</span>
          <MdPermMedia />
        </NavIcon>
      </NavLink>
      <NavLink to="/about">
        <NavIcon>
          <span>About</span>
          <TiInfo />
        </NavIcon>
      </NavLink>
      <NavLink to="/vendors">
        <NavIcon>
          <span>vendors</span>
          <BiPurchaseTag />
        </NavIcon>
      </NavLink>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    </Nav>
  );
}

export default NavBar;
