import React from "react";

import "./BannerAvatar.scss";
import DefaultAvatar from "../../../assets/png/default_avatar.png";
import { API_HOST } from "../../../utils/constants";

export default function BannerAvatar(props) {
  const { user } = props;
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
    </div>
  );
}
