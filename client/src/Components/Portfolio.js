import React, { Component } from "react";
import { Container, Divider, Button } from "semantic-ui-react";

import "./Css/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <Container className="portfolio-container" textAlign="center">
        <h1 className="title"> Projects </h1>
        <Divider />
        <div className="projects-container">
          <div className="project-1">
            <div className="hover">
              <h1 className="outline">RockPaperScissors</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/IT1040-Mizzou/tree/master/BarrettDylanRockPaperScissors"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-2">
            <div className="hover">
              <h1 className="outline">Baseball</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/CS2830-Mizzou"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-3">
            <div className="hover">
              <h1 className="outline">Calories Count</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/CS-4320/tree/master/Calories%20Count"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-4">
            <div className="hover">
              <h1 className="outline">Grade Calculator</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Grade-Calculator/tree/master/Dcbk34GradeCalculator"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-5">
            <div className="hover">
              <h1 className="outline">CPU Monitor</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/CPUMonitor/tree/master/Dcbk34CpuMonitorFXML"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-6">
            <div className="hover">
              <h1 className="outline">Audio Visualizer</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Audio-Visualizer/tree/master/Dcbk34AudioViz"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-7">
            <div className="hover">
              <h1 className="outline">Java Stopwatch</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Stopwatch/tree/master/Dcbk34MVCStopwatchFXML"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-8">
            <div className="hover">
              <h1 className="outline">News Search</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Java-Final-Project/tree/master/Dcbk34FinalProject/Code/Dcbk34FinalProject"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-9">
            <div className="hover">
              <h1 className="outline">Book Manager</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Book-Manager"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-10">
            <div className="hover">
              <h1 className="outline">Checkers (C#)</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/C-Sharp-Checkers"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-11">
            <div className="hover">
              <h1 className="outline">Calculator (C#)</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Calculator"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-12">
            <div className="hover">
              <h1 className="outline">Text Editor (C#)</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Text-Editor"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-13">
            <div className="hover">
              <h1 className="outline">Creature Kingdom C#</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/C-Sharp-Creature-Kingdom"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-14">
            <div className="hover">
              <h1 className="outline">Tutor Finder (Hackweek)</h1>
              <div className="links">
                <a
                  href="https://github.com/DylanBarrett/Hackweek/tree/master/app-master"
                  target="_blank" rel="noopener noreferrer">
                  <Button content="Learn more" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-15">
            <div className="hover">
              <h1 className="outline">IOS Applications (Coming Soon)</h1>
            </div>
          </div>
         
        </div>
      </Container>
    );
  }
}