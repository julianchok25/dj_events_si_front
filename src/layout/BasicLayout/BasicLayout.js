import React from "react";

import "./BasicLayout.scss";

// Layouts render the parent (Menu) in all pages
export default function BasicLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Menu...</h2>
      {children}
    </div>
  );
}
