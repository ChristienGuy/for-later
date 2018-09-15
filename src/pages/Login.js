import React, { Component } from "react";

import firebase, { auth, googleProvider } from "../firebase";

class LoginPage extends Component {
  db = firebase.firestore();

  loginWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(googleProvider);

    if (user) {
      this.db.settings({
        timestampsInSnapshots: true
      });

      this.db
        .collection("users")
        .doc(user.uid)
        .set({
          email: user.email
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.loginWithGoogle}>Login with Google</button>
      </div>
    );
  }
}

export default LoginPage;
