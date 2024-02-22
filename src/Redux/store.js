import { createStore } from "redux";
import { rootReducer } from "./rootReducers";

export const myStore = createStore(rootReducer);
