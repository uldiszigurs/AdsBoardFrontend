const userPosts = (state = [], action) => {
    switch (action.type) {

        case "GET_USER_POSTS" :
            return action.payload;
        case "CLEAR_USER_POSTS" :
                return [];
        default : return state;
    }
}

export default userPosts;