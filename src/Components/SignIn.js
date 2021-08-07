import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import "./SignIn.css";
import Footer from "./Footer";
import visibleIcon from "../Assets/visibility.png";

export class SignIn extends Component {
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
            className="col-12 col-md-4 sign-in-create "
            style={{
              position: this.state.visibleNav ? "relative" : "fixed",
              transform: this.state.visibleNav ? "" : "translate(-8px,-80px)",
            }}
          >
            <div>
              <span className="createStar">
                {" "}
                <p>Sign in or create an account 🌟</p>
              </span>
            </div>
          </Col>
          <Col
            className="col-12 col-md-8 "
            style={{
              marginLeft: this.state.visibleNav ? "0" : "33.3333333333%",
            }}
          >
            <div>
              <div className="formsDiv">
                <Form>
                  <Form>
                    <FormGroup
                      controlId="formBasicEmail"
                      className="formBasicEmail"
                    >
                      <FormControl
                        type="email"
                        placeholder="Enter email"
                        className="emailEnter"
                      />
                    </FormGroup>
                    <FormGroup
                      controlId="formBasicPassword"
                      className="formBasicPassword"
                    >
                      <FormControl
                        type="password"
                        placeholder="Password"
                        className="passEnter"
                      />
                      <Button className="visibleIcon">
                        <img
                          src={visibleIcon}
                          alt="visIcon"
                          className="visIcon"
                        />
                      </Button>
                    </FormGroup>
                    <FormGroup
                      controlId="formBasicCheckbox"
                      className="formbasicCheckbox"
                    >
                      <label className="labelCheck">
                        {" "}
                        <input type="checkbox" className="checkBox"></input>
                        <span className="checkmark"></span>
                        <p className="detailsp">Hola</p>
                      </label>
                    </FormGroup>
                    <div className="SubmitButton">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Form>
              </div>
            </div>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignIn;
