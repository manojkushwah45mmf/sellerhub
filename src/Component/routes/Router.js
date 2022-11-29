import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Landingpage/Home";
import Listing from "../Listing/Listing";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/listing" component={Listing}    />

        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
