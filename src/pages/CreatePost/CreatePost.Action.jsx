import axios from "axios";
//make post, then get post id=> then make request to add image

const createPost = (token, media, username, title, description, category) => async dispatch => {
  let postid;
  //console.log('token = ', token, 'media = ', media, 'username =', username, 'title = ',title, 'description = ', description, 'category = ', category);
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
        /* console.log('response.data.payload.savedDocument._id', response.data.payload.savedDocument._id);
        console.log('response.data.payload.savedDocument', response.data.payload.savedDocument);
        console.log('response.data.payload', response.data.payload);
        console.log('response.data', response.data); */
        postid = response.data.payload.savedDocument._id;
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data.payload.savedDocument._id
        });
      }
    });
     
    //console.log('POSTID ======', postid);
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
  dispatch({ //this is action object, object could be substituted with actionCreator function
    type: "CLEAR_CREATED_POST_ID", 
  });
}
export { createPost, clearCreatedPostId };
