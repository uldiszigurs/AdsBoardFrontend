const posts = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_POSTS" : 
            return action.payload;
            
        case "GET_USER_POSTS" :
            return action.payload;
            
        default : return state;
    }
}

export default posts