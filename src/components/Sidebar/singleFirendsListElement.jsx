import React from 'react';
import PropTypes from 'prop-types';

function SingleFirendsListElement(props) {
  return (
    <div className="col-lg-4">
      <img
        className="rounded-circle"
        src={props.img}
        alt="Generic placeholder"
        width="45rem"
        height="45rem"
      />
      <p>{props.name}</p>
    </div>
  );
}
SingleFirendsListElement.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SingleFirendsListElement;
