// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

export default rootReducer;
