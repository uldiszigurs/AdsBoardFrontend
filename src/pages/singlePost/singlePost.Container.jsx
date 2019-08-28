import { connect } from "react-redux";
import SinglePost from "./singlePost";
import { getSinglePost } from "./singlePost.Action";


const stateToProps = state => ({
  singlePost: state.singlePost
});

export default connect(
  stateToProps,
  { getSinglePost }
)(SinglePost);
