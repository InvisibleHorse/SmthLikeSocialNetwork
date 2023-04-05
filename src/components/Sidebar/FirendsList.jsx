import React from 'react';
import PropTypes from 'prop-types';
import SingleFirendsListElement from './singleFirendsListElement';

function FriendsList(props) {
  const listOfFirendsElements = props.friends.map(
    (fr) => <SingleFirendsListElement name={fr.name} id={fr.id} key={fr.key} img={fr.img} />
  );

  const quentity = Math.floor((Math.random() * 6) + 3);

  return (
    <div className="row socialDistance">
      <h3>Friends: </h3>
      <p className="quentity">
        (
        {quentity}
        )
      </p>
      {listOfFirendsElements}
    </div>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.instanceOf(Array).isRequired,
};

export default FriendsList;
