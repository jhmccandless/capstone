import React, { useState } from "react";
import { connect } from "react-redux";
import "../styling/DiceBox.css";

function DiceBox() {
  function handleClick() {
    let randomNum;
    randomNum = Math.floor(Math.random() * 6) + 1;
  }

  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleClick();
        }}
      >
        <div>this is a dice:</div>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}

const connectedDiceBox = connect(mapStateToProps, mapDispatchToProps)(DiceBox);

export default connectedDiceBox;
