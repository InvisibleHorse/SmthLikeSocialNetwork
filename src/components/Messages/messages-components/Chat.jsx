import React from "react"
import ChatStructure from "./ChatStructure";
import s from "../Messages.module.css"
import {useRef} from "react"

const Chat = (props) => {

    console.log(props)
    let ref = useRef();
    let SendMessage = () => {
        props.addMessage();
    }

    let onChangeSendMessage = () =>{
        let message = ref.current.value;
        props.onChangeNewMessage(message);
    }

    let listOfMessagesElements = props.messagesList.map(m => <ChatStructure message={m.message} id={m.id} />)

    return (
        <div className={s.messages}>
            <div className="bg-light border rounded-3 chatArea">``
                {listOfMessagesElements}
                <div className="forTextArea">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button onClick={SendMessage} class="btn btn-outline-warning" type="button">Send</button>
                        </div>
                        <textarea onChange={onChangeSendMessage} value={props.messageText} ref={ref} class="form-control" rows="1" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chat;
