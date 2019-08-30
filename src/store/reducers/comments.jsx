const comments = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_POST_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return [...state].concat(action.payload); //      return [...state, { isSuccess: true }];
    default:
      return state;
  }
};

export default comments;
