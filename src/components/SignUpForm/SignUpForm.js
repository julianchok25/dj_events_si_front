import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/Validations";
import { signUpApi } from "../../api/auth";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
  const { setShowModal } = props;
  // Saving the data that is filled in the form
  const [formData, setFormData] = useState(initialFormValue());
  // state to control the Spinner
  const [signUpLoading, setSignUpLoading] = useState(false);

  const onSubmit = (e) => {
    // avoid that the page overload when clicks on inside button modal
    e.preventDefault();
    console.log(formData);
    // Validating that all fields is filled
    let validCount = 0;
    // Some: Creates a loop to all keys that the object has
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    console.log(validCount);

    if (validCount !== size(formData)) {
      toast.warning("Complete all the form fields");
    } else {
      // Validating the email
      if (!isEmailValid(formData.email)) {
        toast.warning("Invalid Email");
      } else if (formData.password !== formData.repeatPassword) {
        toast.warning("Password doesn't match");
      } else if (size(formData.password) < 6) {
        toast.warning("Password must have at least 6 characters");
      } else {
        setSignUpLoading(true);
        signUpApi(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Sign up successful");
              setShowModal(false);
              setFormData(initialFormValue());
            }
          })
          .catch(() => {
            toast.error("Server error, try later");
          })
          .finally(() => {
            setSignUpLoading(false);
          });
        toast.success("Form is correct.!!");
      }
    }
    // setShowModal(false);
  };

  //Catching the value from the input. This is functional with only inputs form
  const onChange = (e) => {
    // console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-up-form">
      <h2>Create your account</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={formData.name}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                defaultValue={formData.lastName}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repeat the password"
                name="repeatPassword"
                defaultValue={formData.repeatPassword}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="info" type="submit">
          {!signUpLoading ? "Sign Up" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
