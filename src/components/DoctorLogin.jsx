import React,{useState} from "react";
import '../index.css';
import Footer from "./Footer";
import Header from "./HeaderStaff";
import axios from "axios"; 

export default function StaffLogin() {
    
    const [email,setEmail] = useState("");    
    const [password,setPassword] = useState("");    
  
    function sendData(e){
      e.preventDefault();
  
      const loginStaffMember = {        
        email,       
        password,       
      }
      
      axios.post("http://localhost:4000/doctor/doctorlogin",loginStaffMember).then(()=>{
        alert("Login Successful!")      
      }).catch((err)=>{
        alert(err)
      })

      axios.post("http://localhost:4000/admin/adminlogin",loginStaffMember).then(()=>{
        alert("Login Successful!")      
      }).catch((err)=>{
        alert(err)
      })

      axios.post("http://localhost:4000/receptionist/reclogin",loginStaffMember).then(()=>{
        alert("Login Successful!")      
      }).catch((err)=>{
        alert(err)
      })

      axios.post("http://localhost:4000/labSignup/lablogin",loginStaffMember).then(()=>{
        alert("Login Successful!")      
      }).catch((err)=>{
        alert(err)
      })
    }
  

  return(    
    <div>

    <Header/>

      <div class="shadowLogin shadow-lg p-4 mb-5 bg-white">
      <form onSubmit={sendData}> 
      <h6>New Member? <a href="/doctor">Register here</a></h6>     
        <h1></h1>
        <h2>---------LOGIN---------</h2>
        <h1></h1>
        
        <div class="form-row">
          <div class="col-12">
            <label for="validationCustom03">Email</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
            onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
                    
          <div class="col-12">
            <label for="validationCustom03">Password</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Password" required
            onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
            <div class="invalid-feedback">
              Please provide a valid password.
            </div>
          </div>                 
          
        </div>

        <div class="form-group">
          <div class="form-check">           
          </div>
        </div>

        <button class="signup btn btn-primary" type="submit">Create Your Account</button>
        
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
  
}


