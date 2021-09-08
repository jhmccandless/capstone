import CurrentTotalUI from "../components/CurrentTotalUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { rollTotal: state.currentTotal };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedCurrentTotal = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTotalUI);

export default connectedCurrentTotal;
