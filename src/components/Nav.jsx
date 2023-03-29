import React from "react";
import { NavLink } from "react-router-dom";
import FriendsList from "./Sidebar/FirendsList";
import { connect } from "react-redux";

var activeDialog = false;

const mapStateToProps = (state) => {
    return { friends: state.sideBar.firendsList };
};

const Nav = (props) => {
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
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/settings">Settings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/governmentsecrets">Government Secrets</NavLink>
                </li>
                <FriendsList friends={props.friends}/>
            </ul>
        </nav>
    )
}

export default connect(mapStateToProps)(Nav); // connect wrapper function in use 
