import React from "react";
import { connect } from "react-redux";

function CurrentTotal({ rollTotal }) {
  return (
    <>
      <div>this is the current total: {rollTotal}</div>
    </>
  );
}

function mapStateToProps(state) {
  return { rollTotal: state.turnInfo[1].currentTotal };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedCurrentTotal = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTotal);

export default connectedCurrentTotal;
