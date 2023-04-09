// import { useEffect, useState } from 'react';
// import axios from 'axios';

const initialState = {
  users: [],
  isFetching: false,
  followed: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: [...state.users.map((u) => {
          if (u.key === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })]
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: [...state.users.map((u) => {
          if (u.key === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })]
      };
    case 'SET_USERS': {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((key) => key !== action.userId)
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const toggleisFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
// eslint-disable-next-line max-len
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId });

// const getUsers = (dispatch) => {
//
//   const [limit] = useState(5);
//   const [page, setPage] = useState(1);
//
//   useEffect(() => {
//     if (users.length === 0) {
//       dispatch(toggleisFetching(true));
//       axios
//         .get(`http://localhost:3001/users/0/${limit}`)
//         .then((res) => {
//           toggleisFetching(false);
//           setUsers(res.data);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [users]);
//
//   const loadMore = () => {
//     dispatch(toggleisFetching(true));
//     axios
//       .get(`http://localhost:3001/users/${page}/${limit}`)
//       .then((res) => {
//         toggleisFetching(false);
//         setUsers(res.data);
//       })
//       .catch((err) => console.error(err));
//     setPage(page + 1);
//   };
// }

export default usersReducer;
