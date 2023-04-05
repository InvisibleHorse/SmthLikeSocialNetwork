import React from 'react';
import PropTypes from 'prop-types';
import Intro from './content-components/Intro';
import Background from './content-components/Background';
import NewPost from './content-components/NewPost';
import PostsList from './content-components/PostsList';

function Content(props) {
  return (
    <div className="content">
      <Background profile={props.profile} />
      <Intro profile={props.profile} />
      <NewPost addPost={props.addPost} onChangeNewText={props.onChangeNewText} postText={props.newPostText} />
      <PostsList posts={props.postListarray} />
    </div>
  );
}
Content.propTypes = {
  postListarray: PropTypes.instanceOf(Array).isRequired,
  onChangeNewText: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
  profile: PropTypes.instanceOf(Object),
};
export default Content;
