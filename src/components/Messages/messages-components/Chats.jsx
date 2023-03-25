import React from "react"
import s from "../Messages.module.css"
import Contact from "./Contact"

const Chats = (props) => {

    let listOfChatsElements = props.chats.map(ch => <Contact contactName={ch.contactName} id={ch.id}/>)

    return (
        <div className={s.dialogsList}>
            <nav id="navmenu">
                <ul className="list-group">
                    {listOfChatsElements}
                </ul>
            </nav>
        </div>
    )
}

export default Chats;