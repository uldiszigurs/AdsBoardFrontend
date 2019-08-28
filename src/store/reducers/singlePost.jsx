const singlePost = (state = [], action) => {
    switch (action.type) {
        case "GET_SINGLE_POST" : 
            return action.payload;
            
        default : return state;
    }
}

export default singlePost;