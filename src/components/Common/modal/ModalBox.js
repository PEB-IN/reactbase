import React from "react";
import { useDispatch } from "react-redux";

import classes from "./Modal.module.css";
import {
  setIsCartModalVisible,
  setIsModalVisible,
  setIsTermsModalVisible,
} from "../../../redux/features/modalSlice";

const ModalBox = ({ children }) => {
  const dispatch = useDispatch();

  const modalOverlayHandler = (e) => {
    if (e.target.classList.contains("overlay_bg")) {
      dispatch(setIsModalVisible(false));
    }
  };

  const CLoseModal = () => {
    dispatch(setIsModalVisible(false));
  };
  return (
    <>
      <div className={classes.overlay_bg} onClick={modalOverlayHandler}>
        <div className={`${classes.details}  bg-white`}>
          <button
            type="button"
            className={`${classes.modal_close_btn} flex flex-center fs-14`}
            onClick={CLoseModal}
          >
            <i className={`fa fa-times ${classes.close_icon}`}></i>
          </button>

          <div className="modal-body">{children}</div>

          {/* <div className={classes.deletebutton}>
            <button
              className="btn text-white bg-dark"
              onClick={() => dispatch(setIsModalVisible(false))}
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ModalBox;
