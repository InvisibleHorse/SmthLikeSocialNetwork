import React from 'react';
import PropTypes from 'prop-types';
import s from '../Messages.module.css';
import Contact from '../Contact';

function Chats(props) {
  const listOfChatsElements = props.chats.map((ch) => <Contact contactName={ch.contactName} id={ch.id} />);

  return (
    <div className={s.dialogsList}>
      <nav id="navmenu">
        <ul className="list-group">
          {listOfChatsElements}
        </ul>
      </nav>
    </div>
  );
}

Chats.propTypes = {
  chats: PropTypes.instanceOf(Array).isRequired,
};
export default Chats;
