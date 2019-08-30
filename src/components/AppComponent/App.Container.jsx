import { connect } from "react-redux";
import logout from "./App.Action";
import App from "./App";

const stateToProps = state => {//check if user has viewed a single post before, if yes
  //console.log('state.singlePost = ',state.singlePost);
  let postId;
  if (state.singlePost.length === 0) {
    postId = null;
  } else {
    postId = state.singlePost[0]._id;
    //console.log(" state.singlePost[0]._id = ",  state.singlePost[0]._id);
  }
  return {
    user: state.user,
    category : state.category,
    singlePostId : postId
  };
}; 

export default connect(
  stateToProps,
  { logout }
)(App);
