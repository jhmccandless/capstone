import { createStore } from "redux";
import game_reducer from "./reducer";

const store = createStore(game_reducer)

export default store;