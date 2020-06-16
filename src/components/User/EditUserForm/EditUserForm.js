import React, { useState, useCallback } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";
import { API_HOST } from "../../../utils/constants";
import { Camera } from "../../../utils/Icons";
import {
  uploadBannerApi,
  uploadAvatarApi,
  updateProfileApi,
} from "../../../api/user";

import "./EditUserForm.scss";
import { toast } from "react-toastify";

export default function EditUserForm(props) {
  const { user, setShowModal } = props;
  // Creating a copy of user data to be able to modify it
  const [formData, setFormData] = useState(initialValue(user));
  const [urlBanner, setUrlBanner] = useState(
    user?.banner ? `${API_HOST}/banners?id=${user.id}` : null
  );
  const [urlAvatar, setUrlAvatar] = useState(
    user?.avatar ? `${API_HOST}/avatars?id=${user.id}` : null
  );
  // Sending image to the server
  const [bannerFile, setBannerFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  // State for spinner
  const [stateSpinner, setSpinner] = useState(false);
  // Saving the file
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDropBanner = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setUrlBanner(URL.createObjectURL(file));
    setBannerFile(file);
  });
  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropBanner,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDropAvatar = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setUrlAvatar(URL.createObjectURL(file));
    setAvatarFile(file);
  });

  const {
    getRootProps: getRootAvatarProps,
    getInputProps: getInputAvatarProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropAvatar,
  });
  // modify the value when field is changed dynamically
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setSpinner(true);
    e.preventDefault();
    // console.log("Editando usuario");
    // console.log(formData);
    // console.log(bannerFile);
    // console.log(avatarFile);
    if (bannerFile) {
      await uploadBannerApi(bannerFile).catch(() => {
        toast.error("Error when uploading the new banner");
      });
    }
    if (avatarFile) {
      await uploadAvatarApi(avatarFile).catch(() => {
        toast.error("Error when uploading the new avatar");
      });
    }
    await updateProfileApi(formData)
      .then(() => {
        setShowModal(false);
      })
      .catch(() => {
        toast.error("Error updating user data");
      });
    setSpinner(false);
    window.location.reload();
  };
  return (
    <div className="edit-user-form">
      <div
        className="banner"
        style={{ backgroundImage: `url('${urlBanner}')` }}
        {...getRootBannerProps()}
      >
        <input {...getInputBannerProps()} />
        <Camera />
      </div>
      <div
        className="avatar"
        style={{ backgroundImage: `url('${urlAvatar}')` }}
        {...getRootAvatarProps()}
      >
        <input {...getInputAvatarProps()} />
        <Camera />
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={formData.name}
                onChange={onChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                defaultValue={formData.lastName}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Add your biography"
            type="text"
            name="bio"
            defaultValue={formData.bio}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Web Site"
            name="webSite"
            defaultValue={formData.webSite}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <DatePicker
            placeholder="Birthdate"
            selected={new Date(formData.birthDate)}
            onChange={(value) => setFormData({ ...formData, birthDate: value })}
          ></DatePicker>
        </Form.Group>
        <Button className="btn-submit" variant="danger" type="submit">
          {stateSpinner && <Spinner animation="border" size="sm" />}
          Update
        </Button>
      </Form>
    </div>
  );
}
// Validating the fields
function initialValue(user) {
  return {
    name: user.name ? user.name : "",
    lastName: user.lastName ? user.lastName : "",
    bio: user.bio ? user.bio : "",
    location: user.location ? user.location : "",
    webSite: user.webSite ? user.webSite : "",
    birthDate: user.birthDate ? user.birthDate : "",
  };
}
