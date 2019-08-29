import { connect } from "react-redux";
import CreatePost from "./CreatePost";
import { createPost } from "./CreatePost.Action";

const stateToProps = state => {
  return {
    user: state.user,
    isCreated: state.createPost
  };
};

export default connect(
  stateToProps,
  { createPost }
)(CreatePost);
