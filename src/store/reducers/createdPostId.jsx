const createdPostId = (state = "", action) => {
    switch (action.type) {
        case "CREATE_POST_SUCCESS" : 
            return action.payload;
            
        default : return state;
    }
}

export default createdPostId;