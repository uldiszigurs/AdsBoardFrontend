import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getUserPosts = ({ token }) => dispatch => {
  axios
    .get("/api/v1/post", { headers: { authorization: `Bearer ${token}` } })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_USER_POSTS",
          payload: response.data.payload.posts
        });
        dispatch(
          success({
            title: "Successfully fetched all user posts",
            message: "Successfully fetched all user posts",
            position: "tr",
            autoDismiss: 5
          })
        );
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
