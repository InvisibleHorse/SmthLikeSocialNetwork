import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages-reducer";
import postReducer from "./post-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";


let store = configureStore({
    reducer:{
        postsPage: postReducer,
        messagesPage: messagesReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer
    }
});

export default store 