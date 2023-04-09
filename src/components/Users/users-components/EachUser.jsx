import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import s from '../Users.module.css';

function EachUser(props) {
  const { id } = props;
  const followState = useCallback(() => {
    props.toggleIsFollowingProgress(true, props.id);
    axios
      .put(`http://localhost:3001/users/${id}`, { followed: !props.followed })
      .then((res) => {
        if (res.data.followed) {
          props.follow(id);
        } else {
          props.unfollow(id);
        }
        props.toggleIsFollowingProgress(false, props.id);
      })
      .catch((err) => console.error(err));
  }, [id, props.followed]);

  return (
    <div className={`${s.uGrid} ${s.elementsAlign} bg-light border`}>
      <div className={`${s.img}`}>
        <NavLink
          to={`/users/profile/${props.id}`}
          className="nav-link"
        >
          <img className={`${s.imgStyle}`} src={props.img} alt="Generic placeholder" />
        </NavLink>
        <button
          disabled={props.followingInProgress.some((key) => key === props.id)}
          type="button"
          onClick={followState}
          className="btn btn-success rounded-pill px-3"
        >
          {props.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={`${s.everythingAtOnce}`}>
        <div>
          <h4 className={`${s.forH4}`}>{props.name}</h4>
          <p className={`${s.p}`}>
            <span className={`${s.title} ${s.p}`}>Born:  </span>
            {props.born}
          </p>
          <p className={`${s.p}`}>
            <span className={`${s.title} ${s.p}`}>Career:  </span>
            {props.career}
          </p>
        </div>
      </div>
      <div className={`${s.info}`}>
        <p className={`${s.title} ${s.p}`}>From:</p>
        <p className={`${s.p}`}>{props.from}</p>
      </div>
    </div>
  );
}
EachUser.propTypes = {
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  born: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  followed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggleIsFollowingProgress: PropTypes.func.isRequired,
  followingInProgress: PropTypes.instanceOf(Array).isRequired,
};
export default EachUser;
