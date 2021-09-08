import MainGameUI from "../components/MainGameUI";
import { connect } from "react-redux";
import { holdCurrentTotalAction, resetGameAction } from "../action";

function mapStateToProps(state) {
  return {
    gamePlaying: state.gamePlaying,
    dice1Current: state.dice1,
    dice2Current: state.dice2,
    currentPlayerInfo: state.playerInfo,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameUI);
