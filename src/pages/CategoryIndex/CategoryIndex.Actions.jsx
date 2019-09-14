import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getCategoryList= () => dispatch => {
  try {
    axios
    .get(`/api/v1/category/`) //FIXME: decide the route on backend
    .then(response => {
      
      if (response && response.status === 200) {
        dispatch({
          type: "GET_CATEGORY_LIST",
          payload: response.data.payload.categoryList
        });
        dispatch(
          success({
            title: "Successfully fetched all category list",
            message: "Successfully fetched all category list",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
  } catch (err){
    dispatch(
      error({
        title: "FETCHING CATEGORY_LIST FAILED! ",
        message: err.response.error,
        position: "tc"
      })
    );
  }
  
};

export { getCategoryList};
