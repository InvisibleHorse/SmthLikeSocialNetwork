const initialState = {
  email: null,
  name: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        email: action.data.email,
        name: action.data.name
      };
    default:
      return state;
  }
};
export const setUsersData = (email, name) => ({ type: 'SET_USER_DATA', data: { email, name } });

export default authReducer;
