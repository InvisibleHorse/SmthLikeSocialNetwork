import React from 'react';
import PropTypes from 'prop-types';
import EachUser from './EachUser';
import s from '../Users.module.css';

function UsersList(props) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const usersListElements = props.users.map(
    (u) => (
      <EachUser
        setUsers={props.setUsers}
        follow={props.follow}
        unfollow={props.unfollow}
        followed={u.followed}
        name={u.name}
        id={u.key}
        img={u.img}
      />
    )
  );

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            role="textbox"
            tabIndex={0}
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
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
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired
};

export default UsersList;
