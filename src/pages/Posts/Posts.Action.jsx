import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getAllPosts = () => dispatch => {
  axios
    .get("/api/v1/post")
    .then(response => {
      if (response && response.status === 200) {
        const posts  = response.data.payload.posts;
        if (response === undefined) {
          console.log("WHY IS RESPONSE UNDEFINED?");
        }
        console.log('posts : ', posts);
        dispatch({ //this is action object, object could be substituted with actionCreator function
          type: "GET_ALL_POSTS",
          payload: posts //this is array ALWAYS MAKE IT
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
          title: "getAllPosts FAILED!",
          message: err.response.data.error,
          position: "tc"
        })
      );
    });
};


export { getAllPosts};
