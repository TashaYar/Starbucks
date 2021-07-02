import React, { Component } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import "./Delivers.css";
import deliverimg from "../Assets/Starbucks_Delivers.png";
import deliverimg1 from "../Assets/Starbucks_Delivers1.png";
import carddeliver1 from "../Assets/deliver-card1.png";
import carddeliver2 from "../Assets/deliver-card2.png";
import upImg3 from "../Assets/upimg3.png";
import desc3 from "../Assets/deliverdescimg.jpg";

export class Delivers extends Component {
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
            className="col-12 col-md-4 side-part3"
            style={{
              position: this.state.visibleNav ? "relative" : "fixed",
              transform: this.state.visibleNav ? "" : "translate(-8px,-80px)",
            }}
          >
            <img
              alt="sideImage3"
              src={window.innerWidth < 576 ? deliverimg1 : deliverimg}
              className="sideImg3"
              style={{
                position: "relative",
                width: this.state.visibleNav ? "" : "100%",
              }}
            />
          </Col>
          <div className="div-3">
            <p className="text-3">
              <span className="h-3"> STARBUCKS DELIVERS®</span>
              <p>Get your Starbucks® favourites delivered to your door </p>
            </p>
          </div>

          <Col
            className="col-12 col-md-8 sideDeliver "
            style={{
              marginLeft: this.state.visibleNav ? "0" : "33.3333333333%",
            }}
          >
            <div className="deliversecondpart">
              <img alt="upImage" src={upImg3} className="upImg3" />
            </div>
            <div className="starbuckrundeliver">
              <h3 className="h1-del">
                Your Starbucks® run just got even easier
              </h3>
              <p className="p1-del">
                Find out if delivery is available near you. Start your order to
                get your Starbucks® favourites delivered to you via Uber Eats
                and Just Eat.
              </p>
            </div>
            <h2 className="h2">OUR DELIVERY PARTNERS</h2>

            <div className="entireCardComponent">
              <div className="card-row-1">
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={carddeliver1}
                      alt="cardImg1"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        {" "}
                        Starbucks® Delivers with Uber Eats
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        Get your favourites delivered straight to your door with
                        Uber Eats.
                      </Card.Text>
                      <Button
                        className="btn-card"
                        style={{ marginBottom: "25px" }}
                      >
                        Order now
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 col-md-6 cardS">
                  <Card className="cards">
                    <Card.Img
                      src={carddeliver2}
                      alt="cardImg2"
                      className="cardimage"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "start" }}>
                        Starbucks® Delivers with Just Eat
                      </Card.Title>
                      <Card.Text style={{ textAlign: "start" }}>
                        We're launching with Just Eat in selected stores. Look
                        out for even more stores to come soon!
                      </Card.Text>
                      <Button className="btn-card">Order now</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="descImg3">
              <img src={desc3} alt="dec3" className="desc3" />
            </div>
            <div className="starbuckrundeliver">
              <h3 className="h1-del">Starbucks at Home</h3>
              <p className="p1-del">
                Enjoying your favourite Starbucks café experiences from the
                comfort of your home is closer than you might think. It's the
                coffee you know and love, in your favourite cup!
              </p>
            </div>
            <div className="findoutmore">
              <Button className="btn-card">Find out more</Button>
            </div>
            <h2 className="h2">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="delivrp">
              Check out our Starbucks® Delivers
              <a
                href="mailto:ukinfo@starbucks.com"
                style={{ color: "#008248" }}
              >
                FAQ's
              </a>
            </p>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Delivers;
