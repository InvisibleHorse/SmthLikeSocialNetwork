import React from "react"
import s from "../Messages.module.css"

const ChatStructure = (props) => {
    return (
        <ul >
        <li className={s.message}>
            <p>{props.message}</p>
        </li>
    </ul>
    )
}

export default ChatStructure