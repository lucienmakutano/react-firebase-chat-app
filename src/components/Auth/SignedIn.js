import React from 'react';

import firebase from 'firebase/app';

const auth = firebase.auth();

export default function SignedIn(){
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <button onClick={signInWithGoogle}>sign In With Google</button>
    );
}