import PlayerUI from "../components/PlayerUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { playerState: state.playerInfo };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedPlayer = connect(mapStateToProps, mapDispatchToProps)(PlayerUI);

export default connectedPlayer;
