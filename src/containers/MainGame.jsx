import MainGameUI from "../components/MainGameUI";
import { connect } from "react-redux";
import {
  holdCurrentTotalAction,
  resetGameAction,
  diceRollOneAction,
} from "../action";

function mapStateToProps(state) {
  console.log(state.currentTotal);
  return {
    gamePlaying: state.gamePlaying,
    dice1Current: state.diceRoll[0],
    dice2Current: state.diceRoll[1],
    currentPlayerInfo: state.playerInfo,
    currentTotal: state.currentTotal,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameUI);
