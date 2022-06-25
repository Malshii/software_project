
import './chat.css';
import Signin from './signin';
import Chat from './chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firabase';

function ChatArea() {
  const [user]=useAuthState(auth);
  return (
    <>
    {user ? <Chat /> : <Signin />}


    </>
  );
}

export default ChatArea;
//https://console.firebase.google.com/project/firechat-b2c9f/overview
