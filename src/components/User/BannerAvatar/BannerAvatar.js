import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./BannerAvatar.scss";
import DefaultAvatar from "../../../assets/png/default_avatar.png";
import ConfigModal from "../../../components/Modal/ConfigModal";
import EditUserForm from "../../User/EditUserForm/";
import { API_HOST } from "../../../utils/constants";
import { checkFollowApi } from "../../../api/follow";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const [showModal, setShowModal] = useState(false);
  const [stateFollowing, setFollowing] = useState(null);
  const urlBanner = user?.banner ? `${API_HOST}/banners?id=${user.id}` : null;
  const urlAvatar = user?.avatar
    ? `${API_HOST}/avatars?id=${user.id}`
    : DefaultAvatar;

  useEffect(() => {
    checkFollowApi(user?.id).then((response) => {
      if (response?.status) {
        setFollowing(true);
      } else {
        setFollowing(false);
      }
    });
  }, [user]);

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
            <Button variant="danger" onClick={() => setShowModal(true)}>
              Edit profile
            </Button>
          )}
          {loggedUser._id !== user.id &&
            stateFollowing !== null &&
            (stateFollowing ? (
              <Button variant="danger">Following</Button>
            ) : (
              <Button variant="danger">Follow</Button>
            ))}
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Edit Profile">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );
}
