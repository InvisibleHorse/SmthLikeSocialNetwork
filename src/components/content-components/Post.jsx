import React from "react"
import Likes from "./Likes"

const Post = (props) => {
    return (
        <div>
                <li>
                    <img className="profile-image" src={props.img}/>
                    <h5>{props.name}</h5>
                    <p>{props.content}</p>
                    <Likes />
                </li>
        </div>
    )
}
export default Post; 