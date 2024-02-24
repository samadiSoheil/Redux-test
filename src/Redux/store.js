import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducers";
import { thunk } from "redux-thunk";

export const myStore = createStore(rootReducer, applyMiddleware(thunk));
