import React, { useEffect } from "react";
import "../styling/Popup.css";
import { connect } from "react-redux";
import { disableHoldAction } from "../action.js";

function PopupUI(props) {
  console.log(props.disableHold);
  useEffect(() => {
    console.log("inside useEffect");
    props.disableHold();
  });

  return (
    <>
      <div className="popup-div">
        <div className="pop-up-message">{props.content}</div>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    disableHold: function () {
      dispatch(disableHoldAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupUI);
