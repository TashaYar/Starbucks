import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Nutrition.css";
import sideImg2 from "../Assets/imageThird.png";
import nutritionsecondpart from "../Assets/nutrition-second-part.jpg";
import desc2 from "../Assets/desk2.png";
import Footer from "./Footer";
export class Nutrition extends Component {
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
            className="col-12 col-md-4 side-part2"
            style={{
              position: this.state.visibleNav ? "relative" : "fixed",
              transform: this.state.visibleNav ? "" : "translate(-8px,-80px)",
            }}
          >
            <img
              alt="sideImage2"
              src={sideImg2}
              className="sideImg2"
              style={{
                position: "relative",
                width: this.state.visibleNav ? "" : "100%",
              }}
            />
          </Col>
          <div className="div-1">
            <p className="text-1">
              Starbucks Nutrition and Allergen Information
            </p>
          </div>

          <Col
            className="col-12 col-md-8 sideNutrition"
            style={{
              marginLeft: this.state.visibleNav ? "0" : "33.3333333333%",
            }}
          >
            <div className="nutritionsecondpart">
              <img
                src={nutritionsecondpart}
                alt="secon-side"
                className="upImg2"
              />
            </div>
            <div className="part1">
              <div className="col-12 col-md-6 " className="upimgclass">
                <img alt="desc2" src={desc2} className="desc2" />
              </div>
              <div className="descContent2">
                <h3 style={{ textAlign: "start", fontWeight: "bold" }}>
                  {" "}
                  Starbucks™ Original Nut Blend
                </h3>
                <p style={{ textAlign: "start" }}>
                  Introducing our Starbucks™ Original Nut Blend with allergens
                  Hazelnut and Cashew.
                </p>
                <p style={{ textAlign: "start" }}>
                  Find out more in our allergen booklets below
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info1">
                <h5>
                  IT’S NOT JUST ABOUT CAFFEINE. ALL STARBUCKS PRODUCTS ARE MADE
                  FROM GREAT, FRESH-TASTING INGREDIENTS.
                </h5>
                <p className="infoP">
                  Want to know which allergens are in our food and beverages or
                  how much caffeine is in your cappuccino? Here you will find
                  the allergen and nutrition information for all the Starbucks
                  food and beverages you love.{" "}
                </p>
              </div>
              <div className="info2">
                <h5>Core Beverage Nutritional and Allergen Information</h5>
                <p className="infoP">
                  This guide doesn’t just tell you about the caffeine content;
                  it contains nutrition and allergen information on all our core
                  beverages at Starbucks.
                </p>
                <Button
                  className="btn-card"
                  onClick={(e) => {
                    const newWindow = window.open(
                      "https://www.starbucks.co.uk/sites/starbucks-uk/files/2021-06/SUM21_UK_AllergenBook_CORE_BEVERAGE_v08.pdf",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Download pdf
                </Button>
              </div>
              <div className="info3">
                <h5>Core Food Nutritional and Allergen Information</h5>
                <p className="infoP">
                  This guide contains the allergen and nutrition information –
                  including protein, sugar, and carbohydrate content for all our
                  core food products at Starbucks.
                </p>
                <Button
                  className="btn-card"
                  onClick={(e) => {
                    const newWindow = window.open(
                      "https://www.starbucks.co.uk/sites/starbucks-uk/files/2021-05/Updated%20SUM21_UK_AllergenBook_CORE_FOOD_v07%20%28002%29.pdf",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Download pdf
                </Button>
              </div>
              <div className="info4">
                <h5>
                  Limited Time Offer Beverage and Food Nutrition and Allergen
                  Information
                </h5>
                <p className="infoP">
                  This guide provides you with all the nutrition and allergen
                  information for food and beverages but also provides you with
                  caffeine information for all our limited time offer beverages.
                </p>
                <div className="buttonNutrition">
                  <Button
                    className="btn-nut"
                    onClick={(e) => {
                      const newWindow = window.open(
                        "https://www.starbucks.co.uk/sites/starbucks-uk/files/2021-04/SUM21_UK_AllergenBook_PROMO_v07%20%28FINAL%29.pdf",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    Download Summer pdf
                  </Button>
                  <Button
                    className="btn-nut"
                    style={{ marginLeft: "20px" }}
                    onClick={(e) => {
                      const newWindow = window.open(
                        "https://www.starbucks.co.uk/sites/starbucks-uk/files/2021-03/Allergens%20Spring%20Promo.pdf",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    Download Spring pdf
                  </Button>
                </div>
              </div>
              <div className="info5">
                <p className="infoP">
                  Let us know how we can help further. If you have questions or
                  comments about this guide, please contact our Customer Care
                  team.
                  <p className="infoP">
                    {" "}
                    Either call us on 020 8834 5050 or send an email to
                    <span></span>{" "}
                    <a
                      href="mailto:ukinfo@starbucks.com"
                      style={{ color: "#008248" }}
                    >
                      ukinfo@starbucks.com.
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Nutrition;
