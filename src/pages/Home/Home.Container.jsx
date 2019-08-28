import { connect } from "react-redux";
import { getUserPosts } from "./Home.Actions";
import Home from "./Home";

const stateToProps = state => ({
  user: state.user,
  userPosts: state.userposts
});

export default connect(
  stateToProps,
  { getUserPosts }
)(Home);
