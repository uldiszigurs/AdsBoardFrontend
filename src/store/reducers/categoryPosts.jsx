const categoryPosts = (state = [], action) => {
    switch (action.type) {
        case "GET_CATEGORY_POSTS" :
            return action.payload;
            
        default : return state;
    }
}

export default categoryPosts;