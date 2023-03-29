import React from "react"
import s from "./Messages.module.css"
import Chat from "./messages-components/Chat"
import Chats from "./messages-components/Chats"
import { connect } from "react-redux";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messages-reducer"

const mapStateToProps = (state) => {
    return { 
        listOfChats: state.messagesPage.listOfChats,
        newMessageText: state.messagesPage.newMessageText,
        listOfMessages: state.messagesPage.listOfMessages
     };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        onChangeNewMessage: (message) => dispatch(updateNewMessageActionCreator(message))
    }
}

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <Chats chats={props.listOfChats}/>
            <Chat messagesList={props.listOfMessages} onChangeNewMessage={props.onChangeNewMessage} addMessage={props.addMessage}  messageText={props.newMessageText}/>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages); // connect wrapper function in use 