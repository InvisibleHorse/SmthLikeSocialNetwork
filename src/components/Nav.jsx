import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FriendsList from './Sidebar/FirendsList';

const mapStateToProps = (state) => ({ friends: state.sideBar.firendsList });

function Nav(props) {
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
        <FriendsList friends={props.friends} />
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  friends: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Nav); // connect wrapper function in use
