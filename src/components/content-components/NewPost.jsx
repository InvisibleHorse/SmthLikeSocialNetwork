import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function NewPost(props) {
  const ref = useRef();
  const handleCLick = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = ref.current.value;
    props.onChangeNewText(text);
  };

  return (
    <div className="post-form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Create new post</label>
        <textarea
          onChange={onPostChange}
          ref={ref}
          value={props.postText}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>
      <div className="col-auto submit-button">
        <button onClick={handleCLick} type="submit" className="btn btn-warning mb-3">
          <img alt="plus" src="https://cdn-icons-png.flaticon.com/512/447/447147.png" />
        </button>
      </div>
    </div>
  );
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  onChangeNewText: PropTypes.func.isRequired,
  postText: PropTypes.string.isRequired,
};
export default NewPost;
