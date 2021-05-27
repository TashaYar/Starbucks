import React, { Component } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
const pallavi = "Pallavi";
const gadahi = true;
class MainComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
  }
}

export default MainComponent;
