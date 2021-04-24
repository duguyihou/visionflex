import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/photo' component={PhotoPage} />
      </Switch>
    </Router>
  );
};
