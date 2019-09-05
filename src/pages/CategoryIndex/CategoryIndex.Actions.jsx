import axios from "axios";
import { success, error } from "react-notification-system-redux";

const getCategoryList= () => dispatch => {
  try {
    axios
    .get(`/api/v1/category/`) //FIXME: decide the route on backend
    .then(response => {
      //console.log('GET CATEGORY NAMES EXECUTED!');
      if (response && response.status === 200) {
        dispatch({
          type: "GET_CATEGORY_NAMES",
          payload: response.data.categoryList
        });
        dispatch(
          success({
            title: "Successfully fetched all category names",
            message: "Successfully fetched all category names",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
  } catch (err){
    dispatch(
      error({
        title: "FETCHING CATEGORY_NAMES FAILED! ",
        message: err.response.error,
        position: "tc"
      })
    );
  }
  
};

export { getCategoryList};
