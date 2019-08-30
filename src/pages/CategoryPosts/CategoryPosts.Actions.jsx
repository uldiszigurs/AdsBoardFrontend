import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getCategoryPosts = (token, category) => dispatch => {
  axios
    .get(`/api/v1/post/category/${category}`, { headers: { authorization: `Bearer ${token}` } })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_CATEGORY_POSTS",
          payload: response.data.payload.posts
        });
        dispatch(
          success({
            title: "Successfully fetched all category posts",
            message: "Successfully fetched all category posts",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "FETCHING CATEGORY_POSTS FAILED! ",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getCategoryPosts };
