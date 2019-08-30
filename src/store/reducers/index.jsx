import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import comments from "./comments";
import user from "./user";
import posts from './posts';
import userPosts from './userPosts';
import categoryPosts from './categoryPosts';
import singlePost from './singlePost';
import createdPostId from './createdPostId';


const rootReducer = combineReducers({
  notifications,
  isRegistered,
  posts,
  userPosts,
  categoryPosts,
  comments,
  createdPostId,
  singlePost,
  user,
});

export default rootReducer;
