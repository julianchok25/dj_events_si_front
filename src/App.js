import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState(null);
  // When user has a content, we want to say that the user is logged in
  return (
    <div>
      {!user ? (
        <div>
          <SignInSignUp />
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
}
