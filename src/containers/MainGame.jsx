import MainGameUI from "../components/MainGameUI";
import { connect } from "react-redux";
import { holdCurrentTotalAction, resetGameAction } from "../action";

function mapStateToProps(state) {
  return { currentRollInfo: state };
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
