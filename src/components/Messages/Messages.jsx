import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Messages.module.css';
import Chat from './messages-components/Chat';
import Chats from './messages-components/Chats';
import { addMessage, onChangeNewMessage } from '../../redux/messages-reducer';

const mapStateToProps = (state) => ({
  listOfChats: state.messagesPage.listOfChats,
  newMessageText: state.messagesPage.newMessageText,
  listOfMessages: state.messagesPage.listOfMessages
});

function Messages(props) {
  return (
    <div className={s.dialogs}>
      <Chats chats={props.listOfChats} />
      <Chat
        messagesList={props.listOfMessages}
        onChangeNewMessage={props.onChangeNewMessage}
        addMessage={props.addMessage}
        messageText={props.newMessageText}
      />
    </div>
  );
}

Messages.propTypes = {
  listOfChats: PropTypes.instanceOf(Array).isRequired,
  listOfMessages: PropTypes.instanceOf(Array).isRequired,
  onChangeNewMessage: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  newMessageText: PropTypes.string.isRequired,
};
export default connect(
  mapStateToProps,
  { addMessage, onChangeNewMessage }
)(Messages); // connect wrapper function in use
