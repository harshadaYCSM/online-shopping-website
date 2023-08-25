import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <p className="title">MyCart</p>
            <input placeholder="Search..." />
            <li>
          <NavLink to="/profile" activeClassName="active">Profile</NavLink>
        </li>
        </div>
    )
}

export default Header;