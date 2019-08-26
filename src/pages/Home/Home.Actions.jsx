import axios from "axios";
import { error } from "react-notification-system-redux";

const getPostsList = ({ token }) => dispatch => {
  axios
    .get("/api/v1/post", { headers: { authorization: `Bearer ${token}` } })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_POSTS",
          payload: {}
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Auth failed, check email or password",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getPostsList };
