import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostsList(props) {
  const pla = props.posts.map((p) => <Post name={p.name} img={p.img} content={p.content} id={p.id} />);

  return (
    <div className="posts-list">
      <ul>
        {pla}
      </ul>

    </div>
  );
}
PostsList.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
};
export default PostsList;
