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
import category from './category';
import categoryList from './categoryList';


const rootReducer = combineReducers({
  notifications,
  isRegistered,
  posts,
  userPosts,
  category,
  categoryPosts,
  categoryList,
  comments,
  createdPostId,
  singlePost,
  user,
});

export default rootReducer;
