import MainGameUI from "../components/MainGameUI";
import { connect } from "react-redux";
import { holdCurrentTotalAction, endGameAction } from "../action";

function mapStateToProps(state) {
  return { currentRollInfo: state };
}

function mapDispatchToProps(dispatch) {
  return {
    holdCurrentTotal: function (data) {
      dispatch(holdCurrentTotalAction(data));
    },
    endGameReset: function () {
      dispatch(endGameAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameUI);
