import React from 'react';

import firebase from 'firebase/app';

const auth = firebase.auth();

function ChatMessage(props){
    const { text, uid, photoURL } = props.message;
    
    const messagesClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (
      <div className={`message ${messagesClass}`}>
        <img src={photoURL} alt="avatar" />
        <p>{text}</p>
      </div>
    )
}

export default ChatMessage;
