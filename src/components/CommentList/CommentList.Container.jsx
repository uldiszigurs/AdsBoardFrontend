import { connect } from "react-redux";
import Posts from "./Posts";
import { getAllPosts } from "./Posts.Action";

const stateToProps = state => ({
  user: state.user,
});

export default connect(
  stateToProps,
  { getAllPosts }
)(Posts);
