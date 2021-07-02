import React, { Component } from "react";
import "./footer.css";
import caret from "../Assets/caretUp.svg";
import facebook from "../Assets/facebook.svg";
import instagram from "../Assets/instagram.svg";
import pinterest from "../Assets/pinterest.svg";
import twitter from "../Assets/twitter.svg";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAccord: 0,
    };
  }

  render() {
    return (
      <div className="footerPart">
        <button
          className="accordion"
          onClick={(e) => {
            if (this.state.activeAccord !== 1)
              this.setState({ activeAccord: 1 });
            else {
              this.setState({ activeAccord: 0 });
            }
          }}
        >
          About Us
          <img
            src={caret}
            alt="caret"
            className="accordion-img"
            style={{
              transform: this.state.activeAccord === 1 ? "rotate(0deg)" : "",
            }}
          />
        </button>
        <div
          className="panel"
          style={{
            maxHeight: this.state.activeAccord === 1 ? "21rem" : "0",
          }}
        >
          <ul className="accordianLinks">
            <a href="#" className="footlink">
              About Us
            </a>
            <a href="#" className="footlink">
              Our Coffees
            </a>
            <a href="#" className="footlink">
              Starbucks Stories & News
            </a>
            <a href="#" className="footlink">
              Starbucks® Ready to Drink
            </a>
            <a href="#" className="footlink">
              Foodservice Coffee
            </a>
            <a href="#" className="footlink" style={{ marginBottom: "10px" }}>
              Customer Service
            </a>
          </ul>
        </div>

        <button
          className="accordion"
          onClick={(e) => {
            if (this.state.activeAccord !== 2)
              this.setState({ activeAccord: 2 });
            else {
              this.setState({ activeAccord: 0 });
            }
          }}
        >
          Careers
          <img
            src={caret}
            className="accordion-img"
            alt="caret"
            style={{
              transform: this.state.activeAccord === 2 ? "rotate(0deg)" : "",
            }}
          />
        </button>
        <div
          className="panel"
          style={{
            maxHeight: this.state.activeAccord === 2 ? "5rem" : "0",
          }}
        >
          <ul className="accordianLinks">
            <a href="#" className="footlink" style={{ marginBottom: "10px" }}>
              Search Careers
            </a>
          </ul>
        </div>

        <button
          className="accordion"
          onClick={(e) => {
            if (this.state.activeAccord !== 3)
              this.setState({ activeAccord: 3 });
            else {
              this.setState({ activeAccord: 0 });
            }
          }}
        >
          Social Impact
          <img
            src={caret}
            alt="caret"
            className="accordion-img"
            style={{
              transform: this.state.activeAccord === 3 ? "rotate(0deg)" : "",
            }}
          />
        </button>
        <div
          className="panel"
          style={{
            maxHeight: this.state.activeAccord === 3 ? "10rem" : "0",
          }}
        >
          <ul className="accordianLinks">
            <a href="#" className="footlink">
              Responsibility
            </a>

            <a href="#" className="footlink" style={{ marginBottom: "10px" }}>
              Covid-19
            </a>
          </ul>
        </div>
        <button
          className="accordion"
          onClick={(e) => {
            if (this.state.activeAccord !== 4)
              this.setState({ activeAccord: 4 });
            else {
              this.setState({ activeAccord: 0 });
            }
          }}
        >
          Starbucks Card
          <img
            src={caret}
            alt="caret"
            className="accordion-img"
            style={{
              transform: this.state.activeAccord === 4 ? "rotate(0deg)" : "",
            }}
          />
        </button>
        <div
          className="panel"
          style={{
            maxHeight: this.state.activeAccord === 4 ? "10rem" : "0",
          }}
        >
          <ul className="accordianLinks">
            <a href="#" className="footlink">
              Starbucks Card
            </a>
            <a href="#" className="footlink">
              Starbucks Card Terms & Conditions
            </a>
          </ul>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="socialMedias">
          <a href="#">
            <img src={facebook} className="socialLink" />
          </a>
          <a href="#">
            <img src={pinterest} className="socialLink" />
          </a>
          <a href="#">
            <img src={instagram} className="socialLink" />
          </a>
          <a href="#">
            <img src={twitter} className="socialLink" />
          </a>
        </div>
        <div className="footerEnd">
          <a href="#" className="lastFootlink">
            Contact Us
          </a>
          <a href="#" className="lastFootlink">
            Privacy Policy
          </a>
          <a href="#" className="lastFootlink">
            Terms of Use
          </a>
          <a href="#" className="lastFootlink">
            Cookie Policy
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
