const logout = () => dispatch => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  dispatch({
    type: "LOGOUT"
  });
 
  dispatch({
    type: "CLEAR_USER_POSTS"
  });
};

export default logout;
