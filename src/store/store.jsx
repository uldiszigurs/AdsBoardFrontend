import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/";
import axios from "axios";
import { error as errorNotification } from "react-notification-system-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

axios.interceptors.response.use(
  response => response,
  error => {
    let message,
      title = "Something went wrong";
    if (!error.response) {
      console.log('error.response is falsy, response was not provided probably'); //
    }
    //for debuging purposes some console.logs : causes crash even with new if : ((error.response && error.response.status === 401))
    // even I thought it wont check second expression when && first is false
    console.log("error = ", error);
    console.log("error.response = ", error.response);
    console.log("error.response.status = ", error.response.status);
    if (error.response.status === 401) { //causes crash after some time being idle, when error/error.response is undefined. FIXME: 
     //STILL CAUSES CRASH

      localStorage.removeItem("user");
      localStorage.removeItem("username");
      store.dispatch({
        type: "LOGOUT"
      });
      message = error.response.data.error;
      title = "Token expired";
    }

    store.dispatch(
      errorNotification({
        title,
        message,
        position: "tc"
      })
    );
  }
);

const savedUser = localStorage.getItem("user");
const username = localStorage.getItem("username");

if (savedUser) {
  store.dispatch({
    type: "LOGIN_SUCCESS",
    payload: { token: savedUser, username : username }
  });
}

export default store;
