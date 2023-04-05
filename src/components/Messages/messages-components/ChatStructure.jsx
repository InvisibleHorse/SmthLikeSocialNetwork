import React from 'react';
import PropTypes from 'prop-types';
import s from '../Messages.module.css';

function ChatStructure(props) {
  return (
    <ul className="idk">

      <li className={s.message}>
        {props.id % 2 === 0 && (
        <div className="right-float sb1">
          <p>{props.message}</p>
        </div>
        )}
        {props.id % 2 !== 0 && (
        <div className="left-float sb2">
          <p>{props.message}</p>
        </div>
        )}
      </li>
    </ul>
  );
}

ChatStructure.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatStructure;
