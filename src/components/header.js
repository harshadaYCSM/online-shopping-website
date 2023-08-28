import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">QuickCart</div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
            </div>
            <div className="profile-link">
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </div>
        </div>
    );
}

export default Header;
