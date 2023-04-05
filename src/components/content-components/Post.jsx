import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes';

function Post(props) {
  return (
    <div>
      <li>
        <img alt="profile" className="profile-image" src={props.img} />
        <h5>{props.name}</h5>
        <p>{props.content}</p>
        <Likes />
      </li>
    </div>
  );
}
Post.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Post;
