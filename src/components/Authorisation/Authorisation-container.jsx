// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setUsersData } from '../../redux/auth-reducer';

const mapStateToProps = () => ({});
function AuthContainer() {
  return (<Login />);
}

export default connect(mapStateToProps, { setUsersData })(AuthContainer);
