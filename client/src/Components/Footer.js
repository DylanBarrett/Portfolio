import React, { Component } from "react";
import "./Css/Footer.css";

import { Container, Image } from "semantic-ui-react";

import image from "../images/question.png";


export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.date = null;
  }

  handleMenuClick = name => {
    document
      .querySelector(name)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  componentWillMount = () => {
    var dt = new Date();
    this.date = dt.getFullYear();
  };

  render() {
    return (
      <div className="background">
        <Container>
          <div className="footer-container">
          <div className="column-1">
              <Image className="selfie" src={image} circular />
            </div>
            <div className="column-2">&copy; {this.date} Dylan Barrett</div>
            <div className="column-3">
              <ul className="links">
              <li className="menu-item">
                  <a onClick={() => this.handleMenuClick(".background-image")}>
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => this.handleMenuClick(".about-container")}>
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    onClick={() => this.handleMenuClick(".portfolio-container")}
                  >
                    Projects
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => this.handleMenuClick(".contact-container")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
