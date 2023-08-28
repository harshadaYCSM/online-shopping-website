import { NavLink } from "react-router-dom";
import '../styles/header.css'

function Header() {

    return (
        <div className="header">
            <div className="title">QuickCart</div>
            <input placeholder="Search..." />
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
        </div>
    )
}

export default Header;