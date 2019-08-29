import { connect } from "react-redux";
import CommentList from "./CommentList";
import { getCommentsByPostId } from "./CommentList.Action";

const stateToProps = state => ({
  user: state.user,

});

export default connect(
  stateToProps,
  { getCommentsByPostId }
)(CommentList);
