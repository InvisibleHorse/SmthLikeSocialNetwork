// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Login from './Login';
import { setUsers } from '../../redux/users-reducer';

const mapStateToProps = () => ({});
function AuthContainer() {
  const handleLogin = (email, pass) => {
    axios.defaults.withCrendentails = true;
    axios.post('http://localhost:3001/auth', { email, pass }, { withCredentials: true });
  };

  return (<Login handleLogin={handleLogin} />);
}

export default connect(mapStateToProps, { setUsers })(AuthContainer);
