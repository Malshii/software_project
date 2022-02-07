import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegisterDoctor from "./components/RegisterDoctor";
import RegisterAdmin from "./components/RegisterAdmin";
import RegisterReceptionist from "./components/RegisterReceptionist";
import RegisterLabAssistant from "./components/RegisterLabAssistant";
import RegisterPatient from "./components/RegisterPatient";
import Login from "./components/Login";
import DoctorLogin from "./components/DoctorLogin";
import AdminLogin from "./components/AdminLogin";
import ReceptionistLogin from "./components/ReceptionistLogin";
import LabAssistantLogin from "./components/LabAssistantLogin";
import Home from "./components/Home";

const App=()=> {
  return (
   <Router>
     <Routes>
       <Route exact path="/"  element={<Home/>}/>         
       <Route exact path="/signup"  element={<RegisterPatient/>}/>      
       <Route exact path="/doctor"  element={<RegisterDoctor/>}/>
       <Route exact path="/admin"  element={<RegisterAdmin/>}/>
       <Route exact path="/receptionist"  element={<RegisterReceptionist/>}/>
       <Route exact path="/labAssistant"  element={<RegisterLabAssistant/>}/>
       <Route exact path="/login"  element={<Login/>}/>
       <Route exact path="/DoctorLogin"  element={<DoctorLogin/>}/> 
       <Route exact path="/AdminLogin"  element={<AdminLogin/>}/> 
       <Route exact path="/ReceptionistLogin"  element={<ReceptionistLogin/>}/> 
       <Route exact path="/LabAssistantLogin"  element={<LabAssistantLogin/>}/>      
     </Routes>
   </Router>
  );
}

export default App;


