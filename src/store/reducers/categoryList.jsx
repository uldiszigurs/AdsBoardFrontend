const categoryList = (state = [], action) => {
    switch (action.type) {
        case "GET_CATEGORY_LIST" :
            return action.payload;
            
        default : return state;
    }
}

export default categoryList;