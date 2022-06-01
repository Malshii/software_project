import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegisterStaff from "./components/RegisterStaff";
import RegisterPatient from "./components/RegisterPatient";
import Login from "./components/Login";
//import Doctor from "./components/Doctorloginview";
//import Doc from "./components/DoctorProfile";
import DoctorregistrationForm from "./components/DoctorregistrationForm";
import userCards from "./components/userCards";
import Navbar from "./components/DoctorProfile";
import ChatArea from './components/ChatArea.js';
//Card
const App=()=> {
  return (<div>
   <Router>
     <Routes> 
     
      <Route exact path="/signupPatient"  element={<RegisterPatient/>}/>      
       <Route exact path="/signupDoc"  element={<RegisterStaff/>}/>
       <Route exact path="/signupAdmin"  element={<RegisterStaff/>}/>
       <Route exact path="/signupRec"  element={<RegisterStaff/>}/>
       <Route exact path="/signupLab"  element={<RegisterStaff/>}/>
       <Route exact path="/login"  element={<Login/>}/>  
       <Route exact path="/userCards"  element={<userCards/>}/>      
       <Route exact path="/DoctorregistrationForm"  element={<DoctorregistrationForm/>}/>   
       <Route exact path="/medical_reqest"  element={<Navbar/>}/> 
       <Route exact path="/ChatArea"  element={<ChatArea/>}/> 
     </Routes>
   </Router></div>
  );
}

export default App;




