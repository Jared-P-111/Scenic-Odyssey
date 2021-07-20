import React, { useState, useEffect } from 'react';
import { Nav, NavLink, Logo, MobileIcon, BtnBackDropDiv, NavLinkContainer } from './NavBarSty';
import { FaBars } from 'react-icons/fa';
import { TiTicket, TiInfo } from 'react-icons/ti';
import { GiCampingTent, GiMusicalNotes } from 'react-icons/gi';
import { GiPalmTree } from 'react-icons/gi';
import { BiPurchaseTag } from 'react-icons/bi';

function NavBar({ toggle }) {
  //---------------------STATE------------------------------
  const [toggleTicketBtn, setToggleTicketBtn] = useState(true);
  const [toggleCampingBtn, setToggleCampingBtn] = useState(true);
  const [toggleArtistsBtn, setToggleArtistsBtn] = useState(true);
  const [toggleSceneryBtn, setToggleSceneryBtn] = useState(true);
  const [toggleAboutBtn, setToggleAboutBtn] = useState(true);
  const [toggleVendorBtn, setToggleVendorBtn] = useState(true);
  const [windowWidth, setWindowWidth] = useState({ width: window.innerWidth });

  //----------------------ICONS-------------------------------

  const iconStyle = { fontSize: '15px', flexShrink: 0 };
  const iconsLeft = [TiTicket, GiCampingTent, GiMusicalNotes];
  const iconsRight = [GiPalmTree, TiInfo, BiPurchaseTag];

  //---------------------SCREEN RESIZE-----------------------
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  //-------------------- MAPPABLE OBJECTS FOR COMPONENT-------------

  const navBarDataLeft = [
    {
      pageTo: 'tickets',
      name: 'Tickets',
      state: toggleTicketBtn,
      adjustState: setToggleTicketBtn,
    },
    {
      pageTo: 'camping',
      name: 'Camping',
      state: toggleCampingBtn,
      adjustState: setToggleCampingBtn,
    },
    {
      pageTo: 'artists',
      name: 'Artists',
      state: toggleArtistsBtn,
      adjustState: setToggleArtistsBtn,
    },
  ];

  const navBarDataRight = [
    {
      pageTo: 'scenery',
      name: 'Scenery',
      state: toggleSceneryBtn,
      adjustState: setToggleSceneryBtn,
    },
    {
      pageTo: 'about',
      name: 'About',
      state: toggleAboutBtn,
      adjustState: setToggleAboutBtn,
    },
    {
      pageTo: 'vendors',
      name: 'Vendors',
      state: toggleVendorBtn,
      adjustState: setToggleVendorBtn,
    },
  ];

  //-----------------------DYNAMIC VARIANTS-------------------

  let restVariant = 20;
  let activeVariant = 100;
  let adjustVariant = () => {
    if (windowWidth.width < 1200 && windowWidth.width > 800) {
      restVariant = 20;
      activeVariant = 50;
    } else if (windowWidth.width < 800) {
      restVariant = 20;
      activeVariant = 50;
    }
  };

  adjustVariant();

  const variants = {
    rest: { width: restVariant },
    active: { width: activeVariant },
  };

  //------------------ NAVBAR COMPONENT--------------------------

  return (
    <Nav>
      {navBarDataLeft.map((obj, idx) => {
        const Icon = iconsLeft[idx];
        return (
          <NavLinkContainer key={obj.name}>
            <NavLink
              to={obj.pageTo}
              onMouseEnter={() => obj.adjustState(!obj.state)}
              onMouseLeave={() => obj.adjustState(!obj.state)}
            >
              <span>{obj.name}</span>
              <Icon style={iconStyle} />
            </NavLink>
            <BtnBackDropDiv
              custom={windowWidth}
              variants={variants}
              animate={obj.state ? 'rest' : 'active'}
              transition={{ duration: 0.3 }}
            />
          </NavLinkContainer>
        );
      })}
      <Logo style={{ zIndex: 1 }} />
      {navBarDataRight.map((obj, idx) => {
        const Icon = iconsRight[idx];
        return (
          <NavLinkContainer key={obj.name}>
            <NavLink
              to={obj.pageTo}
              onMouseEnter={() => obj.adjustState(!obj.state)}
              onMouseLeave={() => obj.adjustState(!obj.state)}
            >
              <span>{obj.name}</span>
              <Icon style={iconStyle} />
            </NavLink>
            <BtnBackDropDiv
              variants={variants}
              animate={obj.state ? 'rest' : 'active'}
              transition={{ duration: 0.3 }}
            />
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
