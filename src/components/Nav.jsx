import React from "react";
import {NavLink} from "react-router-dom";

var activeDialog = false;

const Nav = () => {
    return (
        <nav className="nav side-bar rounded-3" id="navmenu">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/messages" className="nav-link">Messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/savedimages">Saved images</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/settings">Settings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/governmentsecrets">Government Secrets</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;