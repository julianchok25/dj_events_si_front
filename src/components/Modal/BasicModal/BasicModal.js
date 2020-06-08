import React from "react";
import { Modal } from "react-bootstrap";

import "./BasicModal.scss";

export default function BasicModal(props) {
  // This is destructuring
  const { show, setShow, children } = props;
  return (
    <Modal
      className="basic-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <h2>Logo</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
