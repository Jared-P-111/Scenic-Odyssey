import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Logo,
  MobileIcon,
  NavIcon,
  BtnBackDropDiv,
  NavLinkContainer,
} from './NavBarSty';
import { FaBars } from 'react-icons/fa';
import { TiTicket, TiInfo } from 'react-icons/ti';
import { GiCampingTent, GiMusicalNotes } from 'react-icons/gi';
import { MdPermMedia } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';

function NavBar({ toggle }) {
  const [toggleDiv, setToggleDiv] = useState(false);

  const toggleDivOnHover = () => {
    setToggleDiv(!toggleDiv);
  };

  const navBarDataLeft = [
    {
      pageTo: 'tickets',
      name: 'Tickets',
    },
    {
      pageTo: 'camping',
      name: 'Camping',
    },
    {
      pageTo: 'artists',
      name: 'Artists',
    },
  ];

  const navBarDataRight = [
    {
      pageTo: 'scenery',
      name: 'Scenery',
    },
    {
      pageTo: 'about',
      name: 'About',
    },
    {
      pageTo: 'vendors',
      name: 'Vendors',
    },
  ];

  return (
    <Nav>
      {navBarDataLeft.map((obj) => {
        return (
          <NavLinkContainer>
            <NavLink
              to={obj.pageTo}
              onMouseEnter={toggleDivOnHover}
              onMouseLeave={toggleDivOnHover}
            >
              <NavIcon />
              <span>{obj.name}</span>
              <TiTicket />
            </NavLink>
            <BtnBackDropDiv toggleDiv={toggleDiv} />
          </NavLinkContainer>
        );
      })}
      <Logo />
      {navBarDataRight.map((obj) => {
        return (
          <NavLinkContainer>
            <NavLink
              to={obj.pageTo}
              onMouseEnter={toggleDivOnHover}
              onMouseLeave={toggleDivOnHover}
            >
              <NavIcon />
              <span>{obj.name}</span>
              <TiTicket />
            </NavLink>
            <BtnBackDropDiv toggleDiv={toggleDiv} />
          </NavLinkContainer>
        );
      })}
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    </Nav>
  );
}

export default NavBar;
