import React from "react";
import "./styling/App.css";
import store from "./store";
import { Provider } from "react-redux";
import DiceBox from "./components/DiceBox";
import Player from "./components/Player";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <DiceBox />
        <Player whichPlayer="0" />
        <Player whichPlayer="1" />
      </div>
    </Provider>
  );
}

export default App;
