import React from "react";
import "../styling/Popup.css";

function PopUpUI(props) {
  return (
    <>
      <div className="popup-div">
        <p className="pop-up-message">{props.content}</p>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </>
  );
}

export default PopUpUI;
