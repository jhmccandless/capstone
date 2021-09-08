import DiceRollUI from "../components/DiceRollUI";
import { connect } from "react-redux";
import { diceRollUpdateAction, diceRollOneAction } from "../action.js";

function mapStateToProps(state) {
  return {
    diceRoll: state.diceRoll,
    isGamePlaying: state.gamePlaying,
    isTwoDiceGame: state.twoDiceGame,
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
