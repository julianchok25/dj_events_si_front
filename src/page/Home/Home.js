import React from "react";
import BasicLayout from "../../layout/BasicLayout";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;
  return (
    <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
      {/* This is the children */}
      <h2>Home...</h2>
    </BasicLayout>
  );
}
