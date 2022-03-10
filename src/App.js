import React, {useState,useEffect} from "react";
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';

import Home from "../src/components/home/Home";

import RegisterPatient from "../src/components/auth/RegisterPatient";

import Login from "../src/components/auth/Login";
import DoctorLogin from "../src/components/auth/DoctorLogin";
import AdminLogin from "../src/components/auth/AdminLogin";
import ReceptionistLogin from "../src/components/auth/ReceptionistLogin";
import LabAssistantLogin from "../src/components/auth/LabAssistantLogin";

import UserDashboard from "./components/dashboard/User.dashboard";
import DoctorProfile from "./components/DoctorProfile";

const App=()=> {
    return (
     <Router>
       <Routes>
         <Route exact path="/"  element={<Home/>}/>      
  
         <Route exact path="/signup"  element={<RegisterPatient/>}/>      
         
         <Route exact path="/login"  element={<Login/>}/>
         <Route exact path="/DoctorLogin"  element={<DoctorLogin/>}/> 
         <Route exact path="/AdminLogin"  element={<AdminLogin/>}/> 
         <Route exact path="/ReceptionistLogin"  element={<ReceptionistLogin/>}/> 
         <Route exact path="/LabAssistantLogin"  element={<LabAssistantLogin/>}/> 
  
         <Route exact path="/dashboard"  element={<UserDashboard/>}/>
         <Route exact path="/doctorProfile"  element={<DoctorProfile/>}/>      
       </Routes>
     </Router>
    );
}

export default App;

/*const App = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      {!auth && (
        <Route
          path="/login"
          element={<Login authenticate={() => setAuth(true)} />}
        />
      )}

      {auth && (        
          <Route
            path="/dashboard"
            element={<UserDashboard logout={() => setAuth(false)} />}
          />        
      )}     

      <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;
*/