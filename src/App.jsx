import React from "react";
import "./styling/App.css";
import store from "./store";
import { Provider } from "react-redux";
import DiceBox from "./components/DiceBox";
import Player from "./components/Player";
import CurrentTotal from "./components/CurrentTotal";
import Button from "./components/Button";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <DiceBox />
        <CurrentTotal />
        <Player whichPlayer="0" />
        <Player whichPlayer="1" />
        <Button />
      </div>
    </Provider>
  );
}

export default App;
