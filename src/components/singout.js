import React from "react";
import {auth} from '../firabase'

 function SignOut(){
     return(
         <div>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
         </div>
     )
 }

 export default SignOut;