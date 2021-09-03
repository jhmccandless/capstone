import DiceRollUI from "../components/DiceRollUI";
import { connect } from "react-redux";
import { diceRollUpdateAction, diceRollOneAction } from "../action.js";

function mapStateToProps(state) {
  return { diceRoll: state.turnInfo[0].currentRoll };
}

function mapDispatchToProps(dispatch) {
  return {
    diceRollUpdate: function (data) {
      dispatch(diceRollUpdateAction(data));
    },
    diceRollsOne: function () {
      dispatch(diceRollOneAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceRollUI);
