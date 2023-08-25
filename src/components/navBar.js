import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <ul className='navbar-list'>
        <li>
          <NavLink to="/" activeClassName="active">Homescreen</NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="active">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
