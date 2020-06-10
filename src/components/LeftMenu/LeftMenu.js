import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUsers,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { logoutApi } from "../../api/auth";
import VinylWhite from "../../assets/png/VinylWhite.png";

import "./LeftMenu.scss";

export default function LeftMenu(props) {
  const { setRefreshCheckLogin } = props;
  const logout = () => {
    logoutApi();
    setRefreshCheckLogin(true);
  };

  return (
    <div className="left-menu">
      <img className="logo" src={VinylWhite} alt="Logo Dj application" />
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon={faUsers} /> Users
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} /> Profile
      </Link>
      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> Logout
      </Link>

      <Button variant="info">New Post</Button>
    </div>
  );
}
