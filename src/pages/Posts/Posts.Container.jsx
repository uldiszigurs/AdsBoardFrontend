import { connect } from "react-redux";
import Posts from "./Posts";
import { getAllPosts } from "./Posts.Action";

const stateToProps = state => ({
  user: state.user,
  posts: state.posts
});

export default connect(
  stateToProps,
  { getAllPosts }
)(Posts);
