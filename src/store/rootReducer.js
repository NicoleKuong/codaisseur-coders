// src/store/reducer.js
import { combineReducers } from "redux";
import devReducer from "./developers/reducer";
import postReducer from "./post/reducer";

export default combineReducers({
  developers: devReducer,
  post: postReducer
  // we can add more "slice" subreducers here later on...
});
