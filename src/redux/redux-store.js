import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages-reducer';
import postReducer from './post-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

const store = configureStore({
  reducer: {
    postsPage: postReducer,
    messagesPage: messagesReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
  }
});

export default store;
