import axios from "axios";
import { success, error } from "react-notification-system-redux";

const PostsAction = () => dispatch => {
  axios
    .get("/api/v1/post")
    .then(response => {
      if (response && response.status === 200) {
        const { token } = response.data.payload;
        localStorage.setItem("user", token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token }
        });

        dispatch(
          success({
            title: "AllPostsFetched",
            message: "AllPostsFetched",
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

export { PostsAction };
