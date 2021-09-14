import PostGameUI from "../components/PostGameUI";
import { connect } from "react-redux";
import {
  holdCurrentTotalAction,
  resetGameAction,
  diceRollOneAction,
  scoreReachedAction,
} from "../action";

function mapStateToProps(state) {
  return {
    gamePlaying: state.gamePlaying,
    dice1Current: state.diceRoll[0],
    dice2Current: state.diceRoll[1],
    currentPlayerInfo: state.playerInfo,
    currentTotal: state.currentTotal,
    currentGameTotal: state.gameEndTotal,
    canHold: state.canHoldCurrentTotal,
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    holdCurrentTotal: function (data) {
      dispatch(holdCurrentTotalAction(data));
    },
    resetGameReset: function () {
      dispatch(resetGameAction());
    },
    diceRollOne: function () {
      dispatch(diceRollOneAction());
    },
    scoreReached: function () {
      dispatch(scoreReachedAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostGameUI);
