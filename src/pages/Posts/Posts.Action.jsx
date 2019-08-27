import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getAllPosts = () => dispatch => {
  axios
    .get("/api/v1/post")
    .then(response => {
      if (response && response.status === 200) {
        const { posts } = response.data.payload.posts;
        dispatch({ //this is action, object could be substituted with
          type: "GET_ALL_POSTS",
          payload: { posts }
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

export { getAllPosts };
