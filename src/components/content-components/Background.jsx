import React from 'react';
import PropTypes from 'prop-types';

function Background(props) {
  return (
    <div className="container-fluid pb-3 ">
      <div>
        <div
          className="bg-light border rounded-3 smth"
          style={{ backgroundImage: `url(${props.profile.backgroundImg})` }}
        >
          <br />
        </div>
      </div>
    </div>
  );
}

Background.propTypes = {
  profile: PropTypes.instanceOf(Object),
};
export default Background;
