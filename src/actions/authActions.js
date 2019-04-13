import firebase, { firestore } from "firebase";

export const signIn = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS", email });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGOUT_FAILED" });
      });
  };
};

export const signUp = usercreds => {
  return (dispatch, getFirestore) => {
    console.log(usercreds);
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(usercreds.email, usercreds.password)
      //   .then(resp => {
      //     return firestore
      //       .collections("users")
      //       .docs(resp.user.uid)
      //       .set({
      //         firstname: usercreds.firstname,
      //         lastname: usercreds.lastname
      //       });
      //   })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_FAILED", err });
      });
  };
};
