import { connect } from "react-redux";
import logout from "./App.Action";
import App from "./App";

const stateToProps = state => {
  return {
    user: state.user
  };
}; 

export default connect(
  stateToProps,
  { logout }
)(App);
