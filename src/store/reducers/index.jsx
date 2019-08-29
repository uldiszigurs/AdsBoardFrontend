import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import comments from "./comments";
import user from "./user";
import posts from './posts';
import userPosts from './userPosts';
import singlePost from './singlePost';
import createdPostId from './createdPostId';


const rootReducer = combineReducers({
  notifications,
  isRegistered,
  posts,
  userPosts,
  comments,
  createdPostId,
  singlePost,
  user,
//  comments,
});

export default rootReducer;
