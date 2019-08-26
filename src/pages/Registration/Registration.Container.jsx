import { connect } from "react-redux";
import Registration from "./Registration";
import { registerUser } from "./Registration.Actions";

const stateToProps = state => ({
  user: state.user,
  isRegistered: state.isRegistered
});

export default connect(
  stateToProps,
  { registerUser }
)(Registration);
