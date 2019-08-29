import { connect } from "react-redux";
import CommentList from "./CommentList";
import { getCommentsByPostId, addComment } from "./CommentList.Action";

const stateToProps = state => ({
  user: state.user,
  comments: state.comments

});

export default connect(
  stateToProps,
  { getCommentsByPostId, addComment }
)(CommentList);
