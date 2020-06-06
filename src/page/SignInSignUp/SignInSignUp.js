import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faCalendarAlt,
  faUserCheck,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/png/VinylRed.png";
import "./SignInSignUp.scss";

export default function SignInSignUp() {
  return (
    // fluid for width: 100% across all viewport and device sizes.
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={Logo} alt="Main Logo" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faMusic} />
          Listen to what interests you
        </h2>
        <h2>
          <FontAwesomeIcon icon={faCalendarAlt} />
          Schedule your events
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUserCheck} />
          Hire your favorite Djs
        </h2>
        <h2>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          Make your music known
        </h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs={6}>
      <h2>Right Component...</h2>
    </Col>
  );
}
