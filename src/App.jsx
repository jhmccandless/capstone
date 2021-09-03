import React from "react";
import "./styling/App.css";
import store from "./store";
import { Provider } from "react-redux";
import MainGame from "./containers/MainGame";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <MainGame />
      </div>
    </Provider>
  );
}

export default App;
