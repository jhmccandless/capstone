import DiceRollUI from "../components/DiceRollUI";
import { connect } from "react-redux";
import { diceRollUpdateAction, diceRollOneAction } from "../action.js";

function mapStateToProps(state) {
  return {
    diceRoll: state.gameInfo[0].currentRoll,
    isGamePlaying: state.gameInfo[3].gamePlaying,
  };
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
