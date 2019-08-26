import { connect } from "react-redux";
import { getPostsList } from "./Home.Actions";
import Home from "./Home";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getPostsList }
)(Home);
