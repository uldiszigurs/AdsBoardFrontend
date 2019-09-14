import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../../pages/Home";
import Registration from "../../pages/Registration";
import Login from "../../pages/Login";
import Posts from "../../pages/Posts";
import CreatePost from "../../pages/CreatePost";
import singlePost from "../../pages/singlePost";
import NotificationSystem from "../NotificationComponent";
import Navigation from "../Navigation";
import PrivateRoute from "../PrivateRoute";
import CategoryPosts from "../../pages/CategoryPosts";
import CategoryIndex from "../../pages/CategoryIndex";




const App = ({ user, singlePostId, logout }) => {
  return (
   <Fragment>
      <Router>
        <Navigation user={user} singlePostId = {singlePostId} logout={logout} />
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/category/:category' component={CategoryPosts} />
          <Route path='/category' component={CategoryIndex} exact/>
          <Route path='/login' component={Login} />
          <Route path='/posts' component={Posts} />
          <Route path='/createpost' component={CreatePost} />
          <PrivateRoute path='/' component={Home} exact />
          <Route path='/post/:id' component={singlePost} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
