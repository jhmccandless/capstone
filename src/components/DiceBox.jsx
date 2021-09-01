import React from "react";
import { connect } from "react-redux";
import { diceRollUpdate } from "../action.js";
import "../styling/DiceBox.css";

function DiceBox({ diceRoll }) {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
    diceRollUpdate(randomNum);
  }

  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleClick();
        }}
      >
        <div>this is a dice: {diceRoll}</div>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return { diceRoll: state.turnInfo[0].currentRoll };
}
function mapDispatchToProps(dispatch) {
  return {
    diceRollUpdate: function (data) {
      dispatch(diceRollUpdate(data));
    },
  };
}

const connectedDiceBox = connect(mapStateToProps, mapDispatchToProps)(DiceBox);

export default connectedDiceBox;
