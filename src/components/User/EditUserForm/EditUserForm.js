import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const { user, setShowModal } = props;
  // Creating a copy of user data to be able to modify it
  const [formData, setFormData] = useState(initialValue(user));
  // modify the value when field is changed dynamically
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={formData.name}
                onChange={onChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                defaultValue={formData.lastName}
                onChange={onChange}
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
            defaultValue={formData.webSite}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Web Site"
            name="webSite"
            defaultValue={formData.webSite}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <DatePicker
            placeholder="Birthdate"
            selected={new Date(formData.birthDate)}
            onChange={(value) => setFormData({ ...formData, birthDate: value })}
          ></DatePicker>
        </Form.Group>
        <Button className="btn-submit" variant="danger" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
// Validating the fields
function initialValue(user) {
  return {
    name: user.name ? user.name : "",
    lastName: user.lastName ? user.lastName : "",
    bio: user.bio ? user.bio : "",
    location: user.location ? user.location : "",
    webSite: user.webSite ? user.webSite : "",
    birthDate: user.birthDate ? user.birthDate : "",
  };
}
