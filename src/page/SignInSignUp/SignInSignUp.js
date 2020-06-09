import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faCalendarAlt,
  faUserCheck,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import Logo from "../../assets/png/VinylRed.png";
import "./SignInSignUp.scss";

export default function SignInSignUp(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  // content to render the modal
  const [contentModal, setContentModal] = useState(null);
  // Open and add content to the modal
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  return (
    // fluid for width: 100% across all viewport and device sizes.
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {/* Here is the children */}
        {contentModal}
      </BasicModal>
    </>
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

function RightComponent(props) {
  const { openModal, setShowModal, setRefreshCheckLogin } = props;
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <h2>Here, Everyone Listens to you.</h2>
        <h3>Join today, we need you.!!</h3>
        <Button
          variant="info"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Sign Up
        </Button>
        <Button
          variant="outline-light"
          onClick={() =>
            openModal(
              <SignInForm setRefreshCheckLogin={setRefreshCheckLogin} />
            )
          }
        >
          Log In
        </Button>
      </div>
    </Col>
  );
}
