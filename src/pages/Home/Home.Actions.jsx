import axios from "axios";
import { error } from "react-notification-system-redux";

const getUserPosts = ({ token }) => dispatch => {
  axios
    .get("/api/v1/post", { headers: { authorization: `Bearer ${token}` } })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_USER_POSTS",
          payload: response.data.payload.posts
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "FETCHING USER_POSTS FAILED! ",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getUserPosts };
