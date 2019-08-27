import { connect } from "react-redux";
import Posts from "./Posts";
import { PostsAction } from "./Posts.Action";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { PostsAction }
)(Posts);
