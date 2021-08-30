import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import DiceBox from "./components/DiceBox";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <DiceBox />
      </div>
    </Provider>
  );
}

export default App;
