import React from "react";
import "./styling/App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import MainGame from "./containers/MainGame";
import HomePageUI from "./components/HomePageUI";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header"></header>
          <MainGame />
        </div>
        <Switch>
          <Route exact path="/homepage" component={HomePageUI} />
          <Route />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
