import React from "react"
import ChatStructure from "./ChatStructure";
import s from "../Messages.module.css"

const Chat = (props) => {

    let listOfMessagesElements = props.messages.map(m => <ChatStructure message={m.message}/>)

    return (
        <div className={s.messages}>
            <div className="bg-light border rounded-3">
                {listOfMessagesElements}
            </div>
        </div>
    )
}

export default Chat;
