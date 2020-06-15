import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./EditUserForm.scss";

export default function EditUserForm() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Add your biography"
            type="text"
            name="bio"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Web Site" name="webSite" />
        </Form.Group>
        <Button className="btn-submit" variant="danger" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
