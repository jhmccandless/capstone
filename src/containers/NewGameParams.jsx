import { connect } from "react-redux";
import NewGameParamsUI from "../components/NewGameParamsUI";
import { gameParametersAction } from "../action";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    gameParameters: function (data) {
      dispatch(gameParametersAction(data));
    },
  };
}

const connectedNewGameParams = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGameParamsUI);

export default connectedNewGameParams;
