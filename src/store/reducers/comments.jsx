const comments = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return [...state, { isSuccess: true }];
    default:
      return state;
  }
};

export default comments;
