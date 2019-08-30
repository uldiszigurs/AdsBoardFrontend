const createdPostId = (state = "", action) => {
    switch (action.type) {
        case "CREATE_POST_SUCCESS" : 
            return action.payload;
        case "CLEAR_CREATED_POST_ID" :
            return "";
        default : return state;
    }
}

export default createdPostId;