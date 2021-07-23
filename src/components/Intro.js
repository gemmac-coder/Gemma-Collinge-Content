import React, { Component } from "react";
import "../index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Ionicons } from "react-icons/io";
// import { FaBeer } from "react-icons/fa";

class Intro extends Component {
  render() {
    return (
      <div id="Intro-Container">
        <div id="Welcome-Container">
          <Container>
            <Row>
              <Col sm={12}>
                <h1 className="neon-heading">WELCOME</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={12}>
                <h2 className="about-h2">
                  {" "}
                  I'm Gemma, Marketer, Writer, Full-Stack Developer.
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Intro;
