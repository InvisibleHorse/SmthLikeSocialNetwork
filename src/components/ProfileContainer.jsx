import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Content from './Content';
import { addPost, onChangeNewText, setUserProfile } from '../redux/post-reducer';

const mapStateToProps = (state) => ({
  newPostText: state.postsPage.newPostText,
  users: state.usersPage.users,
  postListarray: state.postsPage.postListarray,
  profile: state.postsPage.profile
});

function ProfileContainer(props) {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((res) => {
        props.setUserProfile(res.data);
      })
      .catch((err) => console.error(err));
  }, [props.users]);

  return (
    props.profile && (
    <Content
      users={props.users}
      newPostText={props.newPostText}
      postListarray={props.postListarray}
      addPost={props.addPost}
      onChangeNewText={props.onChangeNewText}
      profile={props.profile}
    />
    )
  );
}
ProfileContainer.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  postListarray: PropTypes.instanceOf(Array).isRequired,
  addPost: PropTypes.func.isRequired,
  onChangeNewText: PropTypes.func.isRequired,
  setUserProfile: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
  profile: PropTypes.instanceOf(Object),
};
export default connect(mapStateToProps, { addPost, onChangeNewText, setUserProfile })(ProfileContainer);
