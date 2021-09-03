import React from "react";
import "./styling/App.css";
import store from "./store";
import { Provider } from "react-redux";
import MainGameUI from "./components/MainGameUI";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <MainGameUI />
      </div>
    </Provider>
  );
}

export default App;
