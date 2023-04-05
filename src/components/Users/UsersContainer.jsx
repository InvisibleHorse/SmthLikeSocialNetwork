import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  follow, unfollow, setUsers, toggleisFetching
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../content-components/Preloader';
import s from './Users.module.css';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching
});

function UsersContainer(props) {
  const [limit] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (props.users.length === 0) {
      props.toggleisFetching(true);
      axios
        .get(`http://localhost:3001/users/0/${limit}`)
        .then((res) => {
          props.toggleisFetching(false);
          props.setUsers(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [props.users]);

  const loadMore = () => {
    props.toggleisFetching(true);
    axios
      .get(`http://localhost:3001/users/${page}/${limit}`)
      .then((res) => {
        props.toggleisFetching(false);
        props.setUsers(res.data);
      })
      .catch((err) => console.error(err));
    setPage(page + 1);
  };

  return (
    <div>
      <Users users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
      {props.isFetching ? <Preloader /> : null}
      <div className={`${s.showMore}`}>
        <button type="button" className="btn btn-success rounded-pill px-3" onClick={loadMore}>Show more</button>
      </div>
    </div>
  );
}
UsersContainer.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  unfollow: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  toggleisFetching: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, toggleisFetching
})(UsersContainer);
