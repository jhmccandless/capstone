import DiceRollUI from "../components/DiceRollUI";
import { connect } from "react-redux";
import {
  diceRollUpdateAction,
  diceRollOneAction,
  currentTotalUpdateAction,
  disableHoldAction,
  loseScoreAction,
} from "../action.js";

function mapStateToProps(state) {
  return {
    diceRoll: state.diceRoll,
    isGamePlaying: state.gamePlaying,
    isTwoDiceGame: state.twoDiceGame,
    isBigPigGame: state.bigPigGame,
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
    currentTotalUpdate: function (data) {
      dispatch(currentTotalUpdateAction(data));
    },
    disableHold: function () {
      dispatch(disableHoldAction());
    },
    loseScore: function () {
      dispatch(loseScoreAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceRollUI);
