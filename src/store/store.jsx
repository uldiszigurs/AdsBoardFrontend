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

    if (error.response.status === 401) {
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
