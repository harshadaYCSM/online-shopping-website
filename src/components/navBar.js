import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="active" className="nav-link">
        Homescreen
      </NavLink>
      <NavLink to="/orders" activeClassName="active" className="nav-link">
        Orders
      </NavLink>
      <NavLink to="/cart" activeClassName="active" className="nav-link">
        Cart
      </NavLink>
    </div>
  );
}

export default NavBar;
