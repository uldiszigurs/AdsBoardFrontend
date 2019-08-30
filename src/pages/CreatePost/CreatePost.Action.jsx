import axios from "axios";

const createPost = (token, media, username, title, description, category) => async dispatch => {
  let postid;
  await axios.post(`/api/v1/post`, 
      {
        username,
        title,
        description,
        category
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )
    .then(response => {
      if (response && response.status === 201) {
        postid = response.data.payload.savedDocument._id;
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data.payload.savedDocument._id
        });
      }
    });
     
  const formData = new FormData();
  formData.append("media", media);
  formData.append("username", username);

  
   await axios.post(`/api/v1/post/${postid}/media`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        return response.data.payload.postid;
      }
    });
};
const clearCreatedPostId = () => dispatch => {
  dispatch({ 
    type: "CLEAR_CREATED_POST_ID", 
  });
}
export { createPost, clearCreatedPostId };
