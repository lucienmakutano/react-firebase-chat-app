import React, { useRef, useState } from 'react';

import firebase from 'firebase/app';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from '../ChatMessage/ChatMessage'

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {

    const dummy = useRef();
  
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const {uid, photoURL} = auth.currentUser;
  
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
  
      dummy.current.scrollIntoView({ behavior: 'smooth'})
  
    }
  
  
    return (
      <div>
        <main>
          {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
  
          <div ref={dummy}></div>
        </main>
  
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
  
          <input type="submit" value="send"/>
        </form>
      </div>
    )
}

export default ChatRoom;