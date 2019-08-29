const logout = () => dispatch => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  dispatch({
    type: "LOGOUT"
  });
};

export default logout;
