import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "./Login.Action";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { loginUser }
)(Login);
