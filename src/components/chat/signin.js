import React from "react";
import firebase from 'firebase/compat/app';
import {auth} from './firabase'

 function Signin(){
   function singinwithgoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
     return(
         <div>
            <button onClick={singinwithgoogle}>signin with google</button>

         </div>
     )
 }

 export default Signin;