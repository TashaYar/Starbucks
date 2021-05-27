import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./HomePage.css";
import sideImg from "../Assets/imgOne.png";
import upImg from "../Assets/imageTwo.jpg";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginRight: "0px" }}>
          <Col className="col-12 col-md-4 side-part">
            <img alt="sideImage" src={sideImg} className="sideImg" />
            <Button className="btn-1">How to order your Starbucks®</Button>
          </Col>
          <Col className="col-12 col-md-8 secondSide ">
            <img alt="upImage" src={upImg} className="upImg" />
            <div className="col-12  thisSummer">
              <div className="thisSummerContent">
                <h2 className="h1">This summer it starts with you</h2>
                <p className="p1">
                  {" "}
                  Chocolate? ✓ Coffee? ✓ Crunch? ✓ Sip summer with our new
                  Chocolate Coffee Crunch Frappuccino® Blended Beverage &
                  Caramel Brownie Cream Frappuccino® Blended Beverage. Only at
                  Starbucks®.
                </p>
              </div>
              <Button className="btn-2">Find your nearest store</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
