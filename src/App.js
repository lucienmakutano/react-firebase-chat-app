import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import './firebase';

import ChatRoom from './components/ChatRoom/ChatRoom';
import SignedIn from './components/Auth/SignedIn';
import SignOut from './components/Auth/SignOut';


const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
        <span role="img" aria-label="fire logo">🔥</span>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignedIn />}
      </section>
    </div>
  );
}

export default App;
