import React, { useState } from "react";
import "./SignInForm.scss";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/Validations";
import { signInApi, setTokenApi } from "../../api/auth";

export default function SignInForm(props) {
  const { setRefreshCheckLogin } = props;
  //Setting initial values for formData
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    if (size(formData) !== validCount) {
      toast.warning("Complete all form fields");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Invalid Email");
      } else {
        setSignInLoading(true);
        signInApi(formData)
          .then((response) => {
            if (response.message) {
              toast.warning(response.message);
            } else {
              setTokenApi(response.token);
              setRefreshCheckLogin(true);
              console.log(response.token);
              toast.success("Login Success");
            }
          })
          .catch(() => {
            toast.error("Server Error, try it later");
          })
          .finally(() => {
            setSignInLoading(false);
          });
      }
    }
    console.log(validCount);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-form">
      <h2>Get In</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            defaultValue={formData.password}
          />
        </Form.Group>
        <Button variant="info" type="submit">
          {!signInLoading ? "Log In" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
