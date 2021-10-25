import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onhideCart} />;
};

const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onhideCart={props.onhideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
