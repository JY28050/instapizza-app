import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
//props.onClose from app => cart => modal. If we used context here instead of prop drilling- make this backdrop too specific, clicking backdrop would always close the cart. In this case, the modal is more reusable.

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

/*
On our return <div> add onClick which points to props.onClose- we are taking this from Cart.js / App- thats the chain reaction. So when the user clicks the backdrop, it closes. 

Now go down to the portal in our return statement. In the Backdrop component, we also need to set onClose to {props.onClose}

Again some prop drilling, which could be used with Context. 


*/
