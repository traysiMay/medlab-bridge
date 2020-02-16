import React from "react";
import { createPortal } from "react-dom";
import { uiService } from "../_services";
import { ModalStyle } from "../_styles/basic";

const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.8)",
  color: "#FFF",
  fontSize: "40px"
};
const Modal = ({ onClick }) => {
  const { rendgar } = uiService;
  return createPortal(
    <div style={modalStyle} onClick={onClick}>
      <ModalStyle>{rendgar}</ModalStyle>
    </div>,
    document.getElementById("modal_root")
  );
};

export default Modal;
