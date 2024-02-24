import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";
import userReducer from "./users/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  user: userReducer,
});
