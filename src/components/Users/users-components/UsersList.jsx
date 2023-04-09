import React from 'react';
import PropTypes from 'prop-types';
import EachUser from './EachUser';
import s from '../Users.module.css';

function UsersList(props) {
  const usersListElements = props.users.map(
    (u) => (
      <EachUser
        setUsers={props.setUsers}
        follow={props.follow}
        unfollow={props.unfollow}
        toggleIsFollowingProgress={props.toggleIsFollowingProgress}
        followingInProgress={props.followingInProgress}
        isFetching={props.isFetching}
        followed={u.followed}
        name={u.name}
        id={u.key}
        key={u.key}
        img={u.img}
        from={u.from}
        born={u.born}
        career={u.career}
      />
    )
  );

  return (
    <div>
      <h3 className={`${s.forH3}`}>Users: </h3>
      {usersListElements}
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  setUsers: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  toggleIsFollowingProgress: PropTypes.func.isRequired,
  followingInProgress: PropTypes.instanceOf(Array).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default UsersList;
