import React, { Component } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "./HomePage.css";
import sideImg from "../Assets/imgOne.png";
import upImg from "../Assets/imageTwo.jpg";
import desc1 from "../Assets/desc1.jpg";
import card1Img from "../Assets/about1.jpg";
import card2Img from "../Assets/about2.jpg";
import card3Img from "../Assets/about3.jpg";
import card4Img from "../Assets/about4.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleNav: true,
    };
  }
  onScrollFunc = (e) => {
    if (window.innerWidth > 768) {
      if (window.scrollY >= 80) {
        this.setState({ visibleNav: false });
      } else {
        this.setState({ visibleNav: true });
      }
    } else {
      this.setState({ visibleNav: true });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScrollFunc);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row style={{ marginRight: "0px" }}>
          <Col
            className="col-12 col-md-4 side-part"
            style={{
              position: this.state.visibleNav ? "relative" : "fixed",
              transform: this.state.visibleNav ? "" : "translate(-8px,-80px)",
            }}
          >
            <img
              alt="sideImage"
              src={sideImg}
              className="sideImg"
              style={{
                position: "relative",
                width: this.state.visibleNav ? "" : "100%",
              }}
            />
          </Col>
          <Link
            type="button"
            to="/menu"
            style={{ textDecoration: "none", color: "white" }}
            className="btn-1"
          >
            How to order your Starbucks®
          </Link>
          <Col
            className="col-12 col-md-8 secondSide "
            style={{
              marginLeft: this.state.visibleNav ? "0" : "33.3333333333%",
            }}
          >
            <img alt="upImage" src={upImg} className="upImg" />
            <div className="col-12  thisSummer">
              <div className="thisSummerContent">
                <h2 className="h1">This Summer It Starts With You</h2>
                <p className="p1">
                  {" "}
                  Chocolate? ✓ Coffee? ✓ Crunch? ✓ Sip summer with our new
                  Chocolate Coffee Crunch Frappuccino® Blended Beverage &
                  Caramel Brownie Cream Frappuccino® Blended Beverage. Only at
                  Starbucks®.
                </p>
              </div>

              <div
                className="btn-2-media"
                style={{ textAlign: "start", paddingLeft: "80px" }}
              >
                <Button className="btn-2">Find your nearest store</Button>
              </div>
            </div>
            <h2 className="h2"> Starbucks® Rewards</h2>
            <div className="part1">
              <div
                className="col-12 col-md-6 descImg"
                style={{
                  paddingLeft: "80px",
                  paddingTop: "5px",
                  paddingBottom: "40px",
                }}
              >
                <img alt="desc1" src={desc1} className="desc1" />
              </div>
              <div className="descContent">
                <h3 style={{ textAlign: "start", fontWeight: "bold" }}>
                  {" "}
                  Starbucks® Rewards
                </h3>
                <p style={{ textAlign: "start" }}>
                  With the Starbucks® UK app, you can order on-the-go. Perfect
                  for those long summer days!
                </p>
                <p style={{ textAlign: "start" }}>
                  This Summer It Starts With You.
                </p>
                <p style={{ textAlign: "start" }}>
                  Order ahead and bag rewards.
                </p>
                <Button className="btn-card">Find out more</Button>
              </div>
            </div>
            <div className="entireCardComponent">
              <div className="card-row-1">
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={card1Img}
                      alt="cardImg1"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        {" "}
                        Order ahead with the Starbucks® UK app
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        Skip the queue and get Rewards when you order on our
                        app.
                      </Card.Text>
                      <Button className="btn-card">Download the app</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={card2Img}
                      alt="cardImg2"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        Starbucks® Delivers
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        Get your favourite food and drinks delivered do your
                        door!
                      </Card.Text>
                      <Button className="btn-card">Order now</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="card-row-2">
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={card3Img}
                      alt="cardImg3"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        About Us
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        Find out more about our company and heritage.
                      </Card.Text>
                      <Button className="btn-card">Find out more</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={card4Img}
                      alt="cardImg4"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        Starbucks Stories
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        Keep up to date with our latest stories and news.
                      </Card.Text>
                      <Button className="btn-card">Find out more</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
