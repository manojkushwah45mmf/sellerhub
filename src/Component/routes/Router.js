import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Landingpage/Home";



const Router = () => {
  return (
    <div>
      <BrowserRouter basename="sellerhub/frontend">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
