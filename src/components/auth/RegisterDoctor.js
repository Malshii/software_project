import React,{useState} from "react";
import '../../Styles/index.css';
import Footer from "../Footer";
import Header from "../HeaderStaff";
import axios from "axios"; 


export default function RegisterStaff() {
    
    const [firstName,setFName] = useState("");
    const [lastName,setLName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [dob,setDob] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
      
    function sendData(e){
      e.preventDefault();
  
      const newDoctor = {        
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        password,
        confirmPassword,        
      }
      
      axios.post("http://localhost:4000/doctor/doctorSignup",newDoctor).then(()=>{
        alert("Doctor Added")      
      }).catch((err)=>{
        alert(err)
      })
      
    }
  
  return(
    <div>  
      
    <Header/>

      <div class="shadow shadow-lg p-4 mb-5 bg-white">
      <form onSubmit={sendData}>      
        <h1></h1>
        <h2>---------SIGNUP---------</h2>
        <h1></h1>
        <div class="form-row">

        

          <div class="col-6">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required
            onChange={(e)=>{
              setFName(e.target.value);
            }}  
            />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="col-6">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required
            onChange={(e)=>{
              setLName(e.target.value);
            }}  
            />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>          
        </div>

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
            <label for="validationCustom03">Phone Number</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Phone Number" required
            onChange={(e)=>{
              setPhoneNumber(e.target.value);
            }}  
            />
            <div class="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>

          <div class="col-12">
            <label for="validationCustom03">Date of Birth</label>
            <input type="date" class="form-control" id="validationCustom03" placeholder="Date of Birth" required
            onChange={(e)=>{
              setDob(e.target.value);
            }}  
            />
            <div class="invalid-feedback">
              Please provide a valid Date of Birth.
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

          <div class="col-12">
            <label for="validationCustom03">Confirm Password</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Confirm Password" required
            onChange={(e)=>{
              setconfirmPassword(e.target.value);
            }}  
            />                        
            <div class="invalid-feedback">
              Please provide a valid Confirm Password.
            </div>
          </div>         
          
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Send me Update & Offers
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button class="signup btn btn-primary" type="submit">Create Your Account</button>
        
        <h6 class="text-center">Already an account? <a href="/DoctorLogin">Login here</a></h6>
      </form>
      </div>

      <Footer/>  
      
      </div>    
  )
}

