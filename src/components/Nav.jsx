import React from "react";

const Nav = () => {
    return (
        <nav className="nav side-bar rounded-3">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/messages" className="nav-link">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Saved images</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Porn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My fav nudes   </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;