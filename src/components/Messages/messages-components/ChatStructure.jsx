import React from "react"
import s from "../Messages.module.css"

const ChatStructure = (props) => {
    return (
        <ul className="idk">

        <li className={s.message}>
        {props.id % 2 === 0 && (<div className="right-float sb1">
                <p>{props.message}</p>
            </div>)}
            {props.id % 2 !== 0 && (<div className="left-float sb2">
                <p>{props.message}</p>
            </div>)}
        </li>
    </ul>
    )
}

export default ChatStructure