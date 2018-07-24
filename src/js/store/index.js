import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer); //createStore is a function for creating the redux store

export default store;