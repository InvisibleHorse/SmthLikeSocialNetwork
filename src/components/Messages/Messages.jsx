import React from "react"
import s from "./Messages.module.css"
import Chat from "./messages-components/Chat"
import Chats from "./messages-components/Chats"

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <Chats chats={props.chats}/>
            <Chat messages={props.messages}/>
        </div>
    )
}
export default Messages; 