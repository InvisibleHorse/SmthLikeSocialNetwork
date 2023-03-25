import React from "react";
import Intro from "./content-components/Intro"
import Background from "./content-components/Background"
import NewPost from "./content-components/NewPost";
import PostsList from "./content-components/PostsList";

const Content = (props) => {
    return (
        <div className="content">
            <Background />
            <Intro />
            <NewPost /> 
            <PostsList posts={props.posts}/>
        </div>
    )
}

export default Content;