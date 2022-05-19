import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => (
  <nav>
    <NavLink
      to="/"
      className={(navData) => (navData.isActive ? 'backArrowDisabled' : 'backArrow navbarHover')}
    >
      <Icon icon="eva:arrow-ios-back-fill" width="30" height="30" />
    </NavLink>
    <h1>Covid Tracker</h1>
    <div className="left-nav">
      <Icon icon="fluent:mic-16-filled" width="30" height="30" className="navbarHover" />
      <Icon icon="ci:settings-filled" width="30" height="30" className="navbarHover" />
    </div>
  </nav>
);

export default Navbar;
