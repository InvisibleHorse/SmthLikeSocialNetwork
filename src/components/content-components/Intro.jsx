import React from 'react';
import PropTypes from 'prop-types';

function Intro(props) {
  return (
    <div className="container-fluid pb-3 ">
      <div className="d-grid gap-3">
        <div className="bg-light border img-container" style={{ backgroundImage: `url(${props.profile.img})` }}>
          <br />
        </div>
        <div className="bg-light border rounded-3 description">
          <h6>{props.profile.name}</h6>
          <ul className="decription-ul">
            <p>
              <span className="ingredient">Born: </span>
              {props.profile.born}
              {' '}
            </p>
            <p>
              <span className="ingredient">From: </span>
              {props.profile.from}
              {' '}
            </p>
            <p>
              <span className="ingredient">Career: </span>
              {props.profile.career}
              {' '}
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  profile: PropTypes.instanceOf(Object),
};
export default Intro;
