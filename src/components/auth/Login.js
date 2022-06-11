import React,{useState} from "react";
import axios from "axios"; 
import '../../Styles/index.css';
import HeaderUsers from "../HeaderUsers";
import { useNavigate } from "react-router-dom";

export default function LoginPatient() {  

  const navigate = useNavigate();

  const [email,setEmail] = useState("");    
  const [password,setPassword] = useState("");     
  
    function sendData(e){
      e.preventDefault();
  
      const loginUser = {        
        email,       
        password,       
      }      
      
      axios.post("http://localhost:4000/user/login",loginUser).then(()=>{        
        navigate("/dashboard");
      }).catch((err)=>{
        alert(err)
      })     
    }

  return(    
    <div>

    <HeaderUsers/>

      <div class="shadowLogin shadow-lg p-4 mb-5 bg-white">
      <form onSubmit={sendData}> 
      <h6>New Member? <a href="/signup">Register here</a></h6>     
        <h1></h1>
        <h2>---------LOGIN---------</h2>
        <h1></h1>
        
        <div class="form-row">
          <div class="col-12">
            <label for="validationCustom03">Email</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            />
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
                    
          <div class="col-12">
            <label for="validationCustom03">Password</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Password" required
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            />
            <div class="invalid-feedback">
              Please provide a valid password.
            </div>
          </div>                 
          
        </div>

        <div class="form-group">
          <div class="form-check">           
          </div>
        </div>

        <button class="signup btn btn-primary" type="submit">Click here to login</button>
        
        <div class="row align-items-start">

          <div class="col">          
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">Remember me</label>        
          </div>

          <div class="col">                          
            <a href="/forgot-password">Forgot Password?</a>        
          </div>  

        </div>        
        
      </form>
      </div>       

      </div>       
     
  )    
  
};

/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formsOpenClose, loginUser } from '../auth/redux/homeActions';
import '../../index.css';
import Footer from "../Footer";
import HeaderUsers from "../HeaderUsers";

const Transition = React.forwardRef(function Transition(props, ref) {  
});

function LoginPatient(){ 
  const dispatch = useDispatch();  

  const [role, setRole] = React.useState('patient');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginFormOpen = useSelector((state) => state.homeReducer.loginFormOpen);
  const loading = useSelector((state) => state.homeReducer.loading);

  // close the login popup
  const closeThisDialog = () => {
    dispatch(formsOpenClose({ loginFormOpen: false }));
  };

  // close the login popup and open register form
  const openRegDialog = () => {
    dispatch(formsOpenClose({ loginFormOpen: false, RegisterFormOpen: true }));
  };

  const loginThisUser = () => {
    dispatch(loginUser({ email, password, type: role }));
  };

  return ( 
    <div>

    <HeaderUsers/>

      <div class="shadowLogin shadow-lg p-4 mb-5 bg-white">
      <form> 
      <h6>New Member? <a href="/signup">Register here</a></h6>     
        <h1></h1>
        <h2>---------LOGIN---------</h2>
        <h1></h1>
        
        <div class="form-row">
          <div class="col-12">
            <label for="validationCustom03">Email</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            />
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
                    
          <div class="col-12">
            <label for="validationCustom03">Password</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Password" required
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            />
            <div class="invalid-feedback">
              Please provide a valid password.
            </div>
          </div>                 
          
        </div>

        <div class="form-group">
          <div class="form-check">           
          </div>
        </div>

        <button class="signup btn btn-primary" type="submit">Click here to login</button>
        
        <div class="row align-items-start">

          <div class="col">          
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">Remember me</label>        
          </div>

          <div class="col">                          
            <a href="#">Forgot Password?</a>        
          </div>  

        </div>        
        
      </form>
      </div> 
        
      <Footer/>

      </div>       
     
  )  
}; 

export default LoginPatient;
*/

