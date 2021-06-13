import React from "react";
import { NavLink } from "react-router-dom";
// import Logs from "./Logs";
import "./NavBar.css"

const NavBar = (props) => {
    // const {logs} = props
    return(
        <nav className="navBar">
            <NavLink to="/logs">Logs</NavLink>
            <NavLink to="/logs/new">New Logs</NavLink>
        </nav>
    )
}

export default NavBar;