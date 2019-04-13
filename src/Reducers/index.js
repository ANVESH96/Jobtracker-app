import { combineReducers } from "redux";
import { todos } from "./todos";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  auth: authReducer,
  todos: todos,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
