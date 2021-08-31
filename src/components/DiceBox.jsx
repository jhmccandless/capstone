import React from "react";
import { connect } from "react-redux";
import "../styling/DiceBox.css";

function DiceBox({ diceRoll }) {
  function handleClick() {
    // let randomNum = Math.floor(Math.random() * 6) + 1;
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
  return {};
}

const connectedDiceBox = connect(mapStateToProps, mapDispatchToProps)(DiceBox);

export default connectedDiceBox;
