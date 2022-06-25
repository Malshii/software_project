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
import History from "./components/History";
import LabReport from "./components/LabReport";
import NavBar from "./components/navigationbar";
import ReciNavBar from "./components/Recinavigationbar";
//import DoctorProfile from "./components/DoctorProfile";
import Rohitha from "./components/Rohitha";
import CheckUpDetails from "./components/Lab_Report/CheckUpDetails";
import RequestLabReport from "./components/Lab_Report/RequestLabReport";
import LabReportList from "./components/Lab_Report/LabReportList";
import LabReportIssue from "./components/Lab_Report/LabReportIssue";

import ViewDoctorCard from "./components/View_Doctor_Profile/ViewDoctorCard";
import DisplayDoctorCard from "./components/View_Doctor_Profile/DisplayDoctorCard";
import ViewDoctorsProfile from "./components/View_Doctor_Profile/ViewDoctorsProfile";
import Payment from "./components/Payment";

import Reci from "./components/Reci";
import Dog from "./components/Dog";
import Kol from "./components/Kol";

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
       <Route exact path="/viewDoctorCard"  element={<ViewDoctorCard/>}/>  
       <Route exact path="/displayDoctorCard/:id"  element={<DisplayDoctorCard/>}/>  
       <Route exact path="/labAssistantProfile"  element={<LabCard/>}/> 
       <Route exact path="/lab"  element={<Lab/>}/>  
       <Route exact path="/reci"  element={<Reci/>}/>  
       <Route exact path="/uploadLabReport"  element={<LabReport/>}/> 
       <Route exact path="/history"  element={<History/>}/>
       <Route exact path="/nav"  element={<NavBar/>}/>
       
       <Route exact path="/rohitha"  element={<Rohitha/>}/> 
       <Route exact path="/reciNav"  element={<ReciNavBar/>}/>   
       <Route exact path="/allAppointment"  element={<AllAppointment/>}/>  
       <Route exact path="/checkUpDetails"  element={<CheckUpDetails/>}/> 
       <Route exact path="/labReportList"  element={<LabReportList/>}/>
       <Route exact path="/labReportIssue"  element={<LabReportIssue/>}/> 
       <Route exact path="/requestLabReport"  element={<RequestLabReport/>}/> 

       <Route exact path="/payment"  element={<Payment/>}/>
       <Route exact path="/viewDoctorsProfile"  element={<ViewDoctorsProfile/>}/> 
       <Route exact path="/login"  element={<Login/>}/>
       <Route exact path="/dog"  element={<Dog/>}/>
       <Route exact path="/kol"  element={<Kol/>}/>
           
     </Routes>
   </Router>
  );
}

export default App;


