import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/";
import { Provider } from "react-redux";
import App from './components/AppComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();


/* 
TODO: Either have GET_USER_POSTS and GET_ALL_POSTS in one redux store key (i.e. overwriting on redirection) or 
have seperate state for both and have option to force fetch (like clearing redux store state of both single or all posts)
TODO: On post fetching - get post => after post is fetched, get its id, fetch comments with postId's => get image with the postId
TODO: UPDATE / DELETE by ID (AUTH, validate user who requested, can delete/update own post) 
(not sure how to deal with this as username could be obtained, and any valid token would work AFAIK)
TODO: UPLOAD IMG
TODO: FIX RESPNOSE STATUS CODES (backend)
TODO: FIX MULTIPLE RENDERS. OH GOD.

*/
