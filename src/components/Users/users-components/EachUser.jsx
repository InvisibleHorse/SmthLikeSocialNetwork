import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from '../Users.module.css';

function EachUser(props) {
  const followState = () => {
    if (props.followed) {
      props.unfollow(props.id);
    } else {
      props.follow(props.id);
    }
  };

  return (
    <div className={`${s.uGrid} ${s.elementsAlign} bg-light border`}>
      <div className={`${s.img}`}>
        <NavLink
          to={`/users/profile/${props.id}`}
          className="nav-link"
        >
          <img
            className={`${s.imgStyle}`}
            src={props.img != null ? props.img : 'https://img.freepik.com/free-icon/motorcyclist_318-210119.jpg?w=2000'}
            alt="Generic placeholder"
          />
        </NavLink>
        <button type="button" onClick={followState} className="btn btn-success rounded-pill px-3">
          {props.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={`${s.everythingAtOnce}`}>
        <div>
          <h4 className={`${s.forH4}`}>{props.name}</h4>
        </div>
      </div>
    </div>
  );
}
EachUser.propTypes = {
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  followed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default EachUser;
