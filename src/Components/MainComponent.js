import React, { Component } from "react";
import Header from "./Header";
import HomePage from "./HomePage";

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
