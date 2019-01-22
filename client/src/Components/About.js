import React, { Component } from "react";

import {Container, Divider, Button, Icon, Image, Modal} from "semantic-ui-react";

import resume from "../images/resume.PNG";

import "./Css/About.css";

export default class About extends Component {
  render() {
    return (
      <Container className="about-container" textAlign="center">
        <h1 className="title">About me</h1>
        <Divider />
        <p className="desc">
          Front-end web developer motivated to expand and develop my skills in
          a fast changing field. Proficient in multiple different web
          technologies, demonstrating excellent communication skills, and
          working effectively in groups or independently. All knowledge of web development and 
          practies came from University of Missouri-Columbia College of Engineering.
        </p>

        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/dylan-barrett-24a643114/"
            target="_blank" rel="noopener noreferrer"
          >
            <Button color="linkedin" size="large">
              <Icon name="linkedin" /> LinkedIn
            </Button>
          </a>

          <a href="https://github.com/DylanBarrett" target="_blank" rel="noopener noreferrer">
            <Button color="secondary" size="large">
              <Icon name="github" /> Github
            </Button>
          </a>

          <Modal
            trigger={
              <Button color="google plus" size="large">
                <Icon name="file" /> Resume
              </Button>
            }
          >
            <Modal.Header>Resume</Modal.Header>
            <Modal.Content>
              <Image centered src={resume} />
            </Modal.Content>
          </Modal>
        </div>
      </Container>
    );
  }
}
