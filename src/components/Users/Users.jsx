import React from 'react';
import PropTypes from 'prop-types';
import s from './Users.module.css';
import UsersList from './users-components/UsersList';

function Users(props) {
  return (
    <div>
      <div className={`${s.userPlate} ${s.mainOne} bg-light border rounded-3`}>
        <UsersList users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
      </div>
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  unfollow: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default Users;
