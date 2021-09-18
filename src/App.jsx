import React from "react";
import "./styling/App.css";
import "./styling/webfont/stylesheet.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
// import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

import MainGame from "./containers/MainGame";
import HomePageUI from "./components/HomePageUI";
import NewGameParams from "./containers/NewGameParams";
import GameRulesUI from "./components/GameRulesUI";
import ScoreboardUI from "./components/ScorboardUI";
import PostGame from "./containers/PostGame";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <h1>One and Done</h1>
                <div className="link-div">
                  <Link className="header-link" to="/homepage">
                    Home
                  </Link>
                  <Link className="header-link" to="/new_game_setup">
                    New Game
                  </Link>
                  <Link className="header-link" to="/game_rules">
                    Game Rules
                  </Link>
                  <Link className="header-link" to="/scoreboard">
                    Scoreboard
                  </Link>
                </div>
              </header>
              <Switch>
                <Route exact path="/homepage" component={HomePageUI} />
                <Route path="/new_game_setup" component={NewGameParams} />
                <Route path="/current_game" component={MainGame} />
                <Route path="/game_rules" component={GameRulesUI} />
                <Route path="/scoreboard" component={ScoreboardUI} />
                <Route path="/post_game" component={PostGame} />
                <Route path="*">
                  <Redirect to="/homepage" />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
