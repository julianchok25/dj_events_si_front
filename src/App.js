import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import SignInSingUp from "./page/SigninSingUp";

export default function App() {
  const [user, setUser] = useState(null);
  // When user has a content, we want to say that the user is logged in
  return (
    <div>
      {!user ? (
        <div>
          <SignInSingUp />
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
      <Button variant="primary">Button</Button>
      <Alert variant="danger">This is a alert—check it out!</Alert>
    </div>
  );
}
