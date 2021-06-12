import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navBar">
            <Link to="/logs">Logs</Link>
            <Link to="/logs/new">New Logs</Link>
        </nav>
    )
}

export default NavBar;