import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../../pages/Home";
import Registration from "../../pages/Registration";
import Login from "../../pages/Login";
import NotificationSystem from "../NotificationComponent";
import Navigation from "../Navigation";
import PrivateRoute from "../PrivateRoute";



const App = ({ user, logout }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} logout={logout} />
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={Home} exact />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
