// this does not work and I do not know why

import MainGameUI from "../components/MainGameUI";
import { connect } from "react-redux";
import { holdCurrentTotalAction } from "../action";

function mapStateToProps(state) {
  console.log("still not working");
  return { currentRollInfo: state };
}

function mapDispatchToProps(dispatch) {
  console.log("did i hit this?");
  return {
    holdCurrentTotal: function (data) {
      dispatch(holdCurrentTotalAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameUI);
