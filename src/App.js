import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  // When user has a content, we want to say that the user is logged in
  return (
    <div>
      {user ? <h1>Hi, you're logged in</h1> : <h1>You are not logged in</h1>};
    </div>
  );
}
