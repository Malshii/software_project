import React, { useState } from "react";
import axios from "axios"; 

function AddPatient() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function sendData(e){
    e.preventDefault();

    const newPatient = {
      name,
      email,
      password      
    }
    axios.post("http://localhost:4000/patient/add",newPatient).then(()=>{
      alert("Patient Added")      
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="name" placeholder="Name"
          onChange={(e)=>{
            setName(e.target.value);
          }}          
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
          onChange={(e)=>{
            setEmail(e.target.value);
          }}          
          />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password"
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          />
        </div>  

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    
  );
}

export default AddPatient;
