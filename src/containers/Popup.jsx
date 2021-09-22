import PopupUI from "../components/PopupUI";
import { connect } from "react-redux";
import { disableHoldAction } from "../action.js";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    disableHold: function () {
      dispatch(disableHoldAction());
    },
  };
}

// const connectedPopup = connect(mapStateToProps, mapDispatchToProps)(PopupUI);

// export default connectedPopup;

export default connect(mapStateToProps, mapDispatchToProps)(PopupUI);
