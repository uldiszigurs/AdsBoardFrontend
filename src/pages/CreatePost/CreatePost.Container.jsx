import { connect } from "react-redux";
import CreatePost from "./CreatePost";
import { createPost } from "./CreatePost.Action";

const stateToProps = state => {
  return {
    user: state.user,
    createdPostId: state.createdPostId
    
  };
};

export default connect(
  stateToProps,
  { createPost }
)(CreatePost);
