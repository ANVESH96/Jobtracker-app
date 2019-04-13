import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import combineReducers from "./Reducers/index";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbconfig from "./firebase/fbconfig";
const store = createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbconfig, { attachAuthIsReady: true }),
    reduxFirestore(fbconfig)
  )
);
store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
