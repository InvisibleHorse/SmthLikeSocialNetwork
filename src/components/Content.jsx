import React from "react";
import Intro from "./content-components/Intro"
import Background from "./content-components/Background"
import NewPost from "./content-components/NewPost";
import PostsList from "./content-components/PostsList";
import { addPostActionCreator, updateNewTextActionCreator } from "../redux/post-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { 
        newPostText: state.postsPage.newPostText,
        postListarray: state.postsPage.postListarray
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onChangeNewText: (text) => dispatch(updateNewTextActionCreator(text))
    }
}

const Content = (props) => {
    return (
        <div className="content">
            <Background />
            <Intro />
            <NewPost addPost={props.addPost} onChangeNewText={props.onChangeNewText} postText={props.newPostText}/> 
            <PostsList posts={props.postListarray}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content); // connect wrapper function in use 