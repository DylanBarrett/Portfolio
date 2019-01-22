import React, { Component } from "react";

import { Button } from "semantic-ui-react";

import "./Css/Landing.css";

export default class Landing extends Component {
  handleLearnMore = name => {
    document
      .querySelector(name)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    return (
      <div className="bottom-right">
        <p className="name">Dylan Barrett</p>
        <p className="desc">Web Developer</p>
        <Button
          content="Learn More"
          onClick={() => this.handleLearnMore(".about-container")}
          className="learn-more"
          size="large"
        />
      </div>
    );
  }
}
