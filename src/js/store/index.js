import { createStore } from "redux";
import rootReducer from "../reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer); //createStore is a function for creating the redux store

export default store;