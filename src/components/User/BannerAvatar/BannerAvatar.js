import React from "react";
import { Button } from "react-bootstrap";
import "./BannerAvatar.scss";
import DefaultAvatar from "../../../assets/png/default_avatar.png";
import { API_HOST } from "../../../utils/constants";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const urlBanner = user?.banner ? `${API_HOST}/banners?id=${user.id}` : null;
  const urlAvatar = user?.avatar
    ? `${API_HOST}/avatars?id=${user.id}`
    : DefaultAvatar;

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${urlBanner}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${urlAvatar}')` }}
      ></div>
      {user && (
        <div className="options">
          {loggedUser._id === user.id && (
            <Button variant="danger">Edit profile</Button>
          )}
          {loggedUser._id !== user.id && (
            <Button variant="danger">Follow</Button>
          )}
        </div>
      )}
    </div>
  );
}
