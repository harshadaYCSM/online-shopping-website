import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css'

function NavBar() {
  return (
    <div className="navbar">
          <NavLink to="/" activeClassName="active">Homescreen</NavLink>
          <NavLink to="/orders" activeClassName="active">Orders</NavLink>
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
    </div>
  );
}

export default NavBar;
