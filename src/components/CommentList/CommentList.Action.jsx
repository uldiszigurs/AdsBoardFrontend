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
        //console.log('Comments : ', comments);
        //console.log('Response.data : ', response.data);
        dispatch({ 
          type: "GET_ALL_POST_COMMENTS",
          payload: comments //this is array ALWAYS MAKE 
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
const addComment = ( token , username, postid, message, createdAt, updatedAt) => dispatch => { /////////////////////TODO: careful, need to update state right away.
  axios
    .post(`/api/v1/post/comments/${postid}`, {"message": message, "username": username}, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT",
          payload: [{message,username,postid,createdAt, updatedAt}]
        });
      }
    });
};

export { getCommentsByPostId, addComment };
