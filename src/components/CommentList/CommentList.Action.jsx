import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getCommentsByPostId = (postid) => dispatch => {
  axios
    .get(`/api/v1/post/comments/${postid}`)
    .then(response => {
      if (response && response.status === 200) {
        const comments  = response.data.payload.comments;
        if (response === undefined) {
          console.log("WHY IS RESPONSE UNDEFINED?");
        }
        console.log('Comments : ', comments);
        console.log('Response.data : ', response.data);
        dispatch({ //this is action object, object could be substituted with actionCreator function
          type: "GET_ALL_POST_COMMENTS",
          payload: comments //this is array ALWAYS MAKE IT
        });

        dispatch(
          success({
            title: "AllCommentsFetched",
            message: "AllCommentsFetched",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "getAllComments FAILED!",
          message: err.response.data.error,
          position: "tc"
        })
      );
    });
};

export { getCommentsByPostId };
