import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegisterStaff from "./components/RegisterStaff";
import RegisterPatient from "./components/RegisterPatient";
import PhysicalPatientAdd from "./components/PhysicalPatientAdd";
import OnlinePatientAdd from "./components/OnlinePatientAdd";
import ReciCard from "./components/ReciCard";
import Login from "./components/Login";

const App=()=> {
  return (
   <Router>
     <Routes> 
      <Route exact path="/signupPatient"  element={<RegisterPatient/>}/>      
       <Route exact path="/signupDoc"  element={<RegisterStaff/>}/>
       <Route exact path="/signupAdmin"  element={<RegisterStaff/>}/>
       <Route exact path="/signupRec"  element={<RegisterStaff/>}/>
       <Route exact path="/signupLab"  element={<RegisterStaff/>}/>
       <Route exact path="/physicalpatientAdd"  element={<PhysicalPatientAdd/>}/>
       <Route exact path="/onlinePatientAdd"  element={<OnlinePatientAdd/>}/>
       <Route exact path="/receptionistProfile"  element={<ReciCard/>}/>  
       <Route exact path="/login"  element={<Login/>}/>
           
     </Routes>
   </Router>
  );
}

export default App;


