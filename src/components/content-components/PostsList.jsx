import React from "react"
import Post from "./Post"

const PostsList = (props) => {

    let pla = props.posts.map(p => <Post name={p.name} img={p.img} content={p.content} id={p.id} />)

    return (
        <div className="posts-list">
            <ul>
                {pla}
            </ul>

        </div>
    )
}
export default PostsList; 