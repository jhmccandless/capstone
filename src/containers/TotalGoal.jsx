import TotalGoalUI from "../components/TotalGoalUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { gameTotal: state.gameEndTotal };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedTotalGoal = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalGoalUI);

export default connectedTotalGoal;
