import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ChatStructure from './ChatStructure';
import s from '../Messages.module.css';

function Chat(props) {
  const ref = useRef();
  const SendMessage = () => {
    props.addMessage();
  };

  const onChangeSendMessage = () => {
    const message = ref.current.value;
    props.onChangeNewMessage(message);
  };

  const listOfMessagesElements = props.messagesList.map((m) => <ChatStructure message={m.message} id={m.id} />);

  return (
    <div className={s.messages}>
      <div className="bg-light border rounded-3 chatArea">
        ``
        {listOfMessagesElements}
        <div className="forTextArea">
          <div className="input-group">
            <div className="input-group-prepend">
              <button onClick={SendMessage} className="btn btn-outline-warning" type="button">Send</button>
            </div>
            <textarea
              onChange={onChangeSendMessage}
              value={props.messageText}
              ref={ref}
              className="form-control"
              rows="1"
              aria-label="With textarea"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  onChangeNewMessage: PropTypes.func.isRequired,
  messagesList: PropTypes.instanceOf(Array).isRequired,
  messageText: PropTypes.string.isRequired,
};

export default Chat;
