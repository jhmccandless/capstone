import React, { useEffect } from "react";
import "../styling/Popup.css";

function PopupUI(props) {
  // console.log(disableHold);
  console.log(props);
  useEffect(() => {
    console.log("inside useEffect");
    // disableHold();
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

export default PopupUI;
