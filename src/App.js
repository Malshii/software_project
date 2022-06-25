import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//import RegisterStaff from "./components/RegisterStaff";
//import RegisterPatient from "./components/RegisterPatient";
//import Login from "./components/Login";
//import Doctor from "./components/Doctorloginview";
//import Doc from "./components/DoctorProfile";
//import DoctorregistrationForm from "./components/DoctorregistrationForm";
//import userCards from "./components/userCards";
//import Navbar from "./components/DoctorProfile";


import ChatArea from './components/chat/ChatArea.js';
import Signaturepadarea from './components/Signaturepad';
import ReqMedicalReportList from './components/medical_certificate/reqest_medical';
import CanReqestMedicalCertificate from './components/medical_certificate/RequestMedicalForPatients';
import MedicalCertificate from './components/medical_certificate/medicalCertificate';
import MedicalIssueForm from './components/medical_certificate/doctorIssueForm';
import Patientreq_view from './components/medical_certificate/patientrequestview';
import ReqestForm from './components/medical_certificate/reqestform';
import UserresView from './components/medical_certificate/PatentResView';
import Imguplad from './components/medical_certificate/imgUpload';
import ImageView from './components/medical_certificate/ImgView';
import RecepView from './components/medical_certificate/RecepView';

//RecepView
//Card
const App=()=> {
  return (<div>
   <Router>
     <Routes> 

       <Route exact path="/ChatArea"  element={<ChatArea/>}/> 
       <Route exact path="/Signaturepad"  element={<Signaturepadarea/>}/> 
       <Route exact path="/ReqMedicalReportList"  element={<ReqMedicalReportList/>}/> 
       <Route exact path="/CanReqestMedicalCertificate"  element={<CanReqestMedicalCertificate/>}/> 
       <Route exact path="/MedicalCertificate"  element={<MedicalCertificate/>}/> 
       <Route exact path="/MedicalIssueForm"  element={<MedicalIssueForm/>}/> 
       <Route exact path="/Patientreq_view"  element={<Patientreq_view/>}/> 
       <Route exact path="/ReqestForm"  element={<ReqestForm/>}/>
       <Route exact path="/UserresView"  element={<UserresView/>}/>
       <Route exact path="/Img_uplad"  element={<Imguplad/>}/>
       <Route exact path="/ImageView"  element={<ImageView/>}/>
       <Route exact path="/RecepView"  element={<RecepView/>}/>
      </Routes>
   </Router></div>
  );
}

export default App;




