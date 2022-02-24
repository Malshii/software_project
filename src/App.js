import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegisterStaff from "./components/RegisterStaff";
import RegisterPatient from "./components/RegisterPatient";
import PhysicalPatientAdd from "./components/PhysicalPatientAdd";
import OnlinePatientAdd from "./components/OnlinePatientAdd";
import ReciCard from "./components/ReciCard";
import LabCard from "./components/LabCard";
import AllAppointment from "./components/AllAppointment";
import Login from "./components/Login";
import Lab from "./components/Lab";
import UploadLabReport from "./components/UploadLabReport";
import NavBar from "./components/navigationbar";
import ReciNavBar from "./components/Recinavigationbar";
import Reci from "./components/Reci";
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
       <Route exact path="/labAssistantProfile"  element={<LabCard/>}/> 
       <Route exact path="/lab"  element={<Lab/>}/>  
       <Route exact path="/reci"  element={<Reci/>}/>  
       <Route exact path="/uploadLabReport"  element={<UploadLabReport/>}/>  
       <Route exact path="/nav"  element={<NavBar/>}/>
       <Route exact path="/reciNav"  element={<ReciNavBar/>}/>   
       <Route exact path="/allAppointment"  element={<AllAppointment/>}/>  
       <Route exact path="/login"  element={<Login/>}/>
           
     </Routes>
   </Router>
  );
}

export default App;


