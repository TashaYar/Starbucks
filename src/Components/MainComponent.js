import React, { Component } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nutrition from "./Nutrition";
import Delivers from "./Delivers";
import Rewards from "./Rewards";
import FindStore from "./FindStore";
import SignIn from "./SignIn";
import Signup from "./Signup";

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/nutrition" component={Nutrition}></Route>
            <Route path="/delivers" component={Delivers}></Route>
            <Route path="/rewards" component={Rewards}></Route>
            <Route path="/find_store" component={FindStore}></Route>
            <Route path="/sign-in" component={SignIn}></Route>
            <Route path="/sign_up" component={Signup}></Route>
          </Switch>
        </>
      </Router>
    );
  }
}

export default MainComponent;
