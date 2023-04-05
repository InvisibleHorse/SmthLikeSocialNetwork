const initialState = {
  users: [],
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.key === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.key === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case 'SET_USERS': {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const toggleisFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });

export default usersReducer;
