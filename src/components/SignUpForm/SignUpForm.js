import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
  const { setShowModal } = props;

  const onSubmit = (e) => {
    // avoid that the page overload when clicks on inside button modal
    e.preventDefault();
    setShowModal(false);
  };
  return (
    <div className="sign-up-form">
      <h2>Create your account</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Repeat the password" />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="info" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
