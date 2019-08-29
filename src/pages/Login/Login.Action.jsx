import axios from "axios";
import { success, error } from "react-notification-system-redux";

const loginUser = user => dispatch => {
  axios
    .post("/api/v1/authentication/login", user)
    .then(response => {
      if (response && response.status === 200) {
        const { token, username } = response.data.payload;
        localStorage.setItem("user", token);
        localStorage.setItem("username", username);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, username }
        });

        dispatch(
          success({
            title: "Login success",
            message: "Login success",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Auth failed, check email or password",
          message: err.response.data.error,
          position: "tc"
        })
      );
    });
};

export { loginUser };
