import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getSinglePost = (_id) => dispatch => {
  axios
    .get(`/api/v1/post/postid/${_id}`)
    .then(response => {
      if (response && response.status === 200) {
        const post  = response.data.payload.post;
        if (response === undefined) {
          console.log("WHY IS RESPONSE UNDEFINED?");
        }
        console.log('post : ', post);
        dispatch({ 
          type: "GET_SINGLE_POST",
          payload: [post] //this is and should be an ARRAY!
        });

        dispatch(
          success({
            title: "SinglePostFetched",
            message: "SinglePostFetched",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(
        error({
          title: "Fetching single post by id has failed",
          message: err.response.data.error,
          position: "tc"
        })
      );
    });
};

export { getSinglePost };
