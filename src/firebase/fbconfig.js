import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAGejceCqcv0zvz1vmaqx9YjQWG_HWfM5s",
  authDomain: "newredux-todo.firebaseapp.com",
  databaseURL: "https://newredux-todo.firebaseio.com",
  projectId: "newredux-todo",
  storageBucket: "newredux-todo.appspot.com",
  messagingSenderId: "853373725714"
};
firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();
