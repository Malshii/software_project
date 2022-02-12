import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PhysicalPatientAdd from "./components/PhysicalPatientAdd";
import OnlinePatientAdd from "./components/OnlinePatientAdd";
import ReciCard from "./components/ReciCard";


const App=()=> {
  return (
   <Router>
     <Routes> 
       <Route exact path="/physicalpatientAdd"  element={<PhysicalPatientAdd/>}/>
       <Route exact path="/onlinePatientAdd"  element={<OnlinePatientAdd/>}/>
       <Route exact path="/receptionistProfile"  element={<ReciCard/>}/>  
       
           
     </Routes>
   </Router>
  );
}

export default App;


