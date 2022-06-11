import React, {useEffect,useState} from "react";
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';

import Home from "./components/home";

import RegisterPatient from "../src/components/auth/RegisterPatient";
import RegisterDoctor from "../src/components/auth/RegisterDoctor";
import RegisterLabAssistant from "../src/components/auth/RegisterLabAssistant";
import RegisterAdmin from "../src/components/auth/RegisterAdmin";
import RegisterReciptionist from "../src/components/auth/RegisterReceptionist";

import Login from "../src/components/auth/Login";
import DoctorLogin from "../src/components/auth/DoctorLogin";
import AdminLogin from "../src/components/auth/AdminLogin";
import ReceptionistLogin from "../src/components/auth/ReceptionistLogin";
import LabAssistantLogin from "../src/components/auth/LabAssistantLogin";

import UserDashboard from "./components/dashboard/User.dashboard";
import DoctorDashboard from "./components/dashboard/Doctor.dashboard";
import ReceptionistDashboard from "./components/dashboard/Receptionist.dashboard";
import AdminDashboard from "./components/dashboard/Admin.dashboard";

import DoctorProfile from "./components/admin/DoctorProfile";
import AddNewSchedule from "./components/doctor/AddNewSchedule";
import CheckAppointment from "./components/doctor/CheckAppointment";
import UpdateAppointment from "./components/UpdateAppointment";
import ContactUs from "./components/EmailSend";
import Dashboard from "./components/charts";
import AppointmentHistory from "./components/user/AppointmentHistory";
import UpcomingEvents from "./components/dashboard/UpcomingEvents";
import ConfirmNewSchedule from "./components/admin/ConfirmNewSchedule";
import MarkDoctorAttendance from "./components/MarkDoctorAttendance";
import ForgotPassword from "./components/ForogtPassword";

//import PrivateRoute from "./routers/PrivateRoute";

// const App = () => {
//   //Control routes for user 
//   const [auth, setAuth] = useState(null);

//   useEffect(() => {
//     let user = localStorage.getItem("user");
//     user && JSON.parse(user) ? setAuth(true) : setAuth(false);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("user", auth);
//   }, [auth]);

//   //Control routes for doctor
//   useEffect(() => {
//     let doctor = localStorage.getItem("doctor");
//     doctor && JSON.parse(doctor) ? setAuth(true) : setAuth(false);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("doctor", auth);
//   }, [auth]);

//   //Control routes for administrator
//   useEffect(() => {
//     let admin = localStorage.getItem("admin");
//     admin && JSON.parse(admin) ? setAuth(true) : setAuth(false);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("admin", auth);
//   }, [auth]);

//   return (
//     <Router>
//     <Routes>
//       <Route exact path="/" element={<Home/>} />
      

//       {!auth && (
//         <Route
//           path="/login"
//           element={<Login authenticate={() => setAuth(true)} />}
//         />
//       )}

//       {auth && (        
//           <Route
//             path="/dashboard"
//             element={<UserDashboard logout={() => setAuth(false)} />}
//           />        
//       )}     

//       <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} />



//       {!auth && (
//         <Route
//           path="/DoctorLogin"
//           element={<DoctorLogin authenticate={() => setAuth(true)} />}
//         />
//       )}

//       {auth && (        
//           <Route
//             path="/doctorDashboard"
//             element={<DoctorDashboard logout={() => setAuth(false)} />}
//           />        
//       )}     

//       <Route path="*" element={<Navigate to={auth ? "/doctorDashboard" : "/DoctorLogin"} />} />




//       {!auth && (
//         <Route
//           path="/AdminLogin"
//           element={<AdminLogin authenticate={() => setAuth(true)} />}
//         />
//       )}

//       {auth && (        
//           <Route
//             path="/adminDashboard"
//             element={<AdminDashboard logout={() => setAuth(false)} />}
//           />        
//       )}     

//       <Route path="*" element={<Navigate to={auth ? "/adminDashboard" : "/AdminLogin"} />} />



//       <Route exact path="/signup"  element={<RegisterPatient/>}/>
//       <Route exact path="/signupDoctor"  element={<RegisterDoctor/>}/>
//       <Route exact path="/signupAdmin"  element={<RegisterAdmin/>}/>
//       <Route exact path="/signupLab"  element={<RegisterLabAssistant/>}/>
//       <Route exact path="/signupRec"  element={<RegisterReciptionist/>}/>

//       <Route exact path="/resetPW"  element={<UserReset/>}/>

//     </Routes>
//     </Router>
//   );
// };

const App=()=> {
    return (
     <Router>
       <Routes>  
         <Route exact path="/" element={<Home />} />
         <Route exact path="/login" element={<Login/>} />        
  
         <Route exact path="/signup"  element={<RegisterPatient/>}/>
         <Route exact path="/signupDoctor"  element={<RegisterDoctor/>}/>
         <Route exact path="/signupAdmin"  element={<RegisterAdmin/>}/>
         <Route exact path="/signupLab"  element={<RegisterLabAssistant/>}/>
         <Route exact path="/signupRec"  element={<RegisterReciptionist/>}/>      
         
         <Route exact path="/DoctorLogin"  element={<DoctorLogin/>}/> 
         <Route exact path="/AdminLogin"  element={<AdminLogin/>}/> 
         <Route exact path="/ReceptionistLogin"  element={<ReceptionistLogin/>}/> 
         <Route exact path="/LabAssistantLogin"  element={<LabAssistantLogin/>}/>   
         
         <Route exact path="/dashboard"  element={<UserDashboard/>}/>
         <Route exact path="/doctorDashboard"  element={<DoctorDashboard/>}/>
         <Route exact path="/recepDashboard"  element={<ReceptionistDashboard/>}/>
         <Route exact path="/adminDashboard"  element={<AdminDashboard/>}/>

         <Route exact path="/addNewSchedule"  element={<AddNewSchedule/>}/>
         <Route exact path="/doctorProfile"  element={<DoctorProfile/>}/> 
         <Route exact path="/checkAppoinment"  element={<CheckAppointment/>}/>
         <Route exact path="/updateAppointment"  element={<UpdateAppointment/>}/> 
         <Route exact path="/emailSend"  element={<ContactUs/>}/>       
         <Route exact path="/chart"  element={<Dashboard/>}/>
         <Route exact path="/dashboard/appointmenthistory"  element={<AppointmentHistory/>}/>
         <Route exact path="/upcomingEvents"  element={<UpcomingEvents/>}/>
         <Route exact path="/confirmNewSchedule"  element={<ConfirmNewSchedule/>}/>
         <Route exact path="/markDoctorAttendance"  element={<MarkDoctorAttendance/>}/>

         <Route exact path="/forgot-password"  element={<ForgotPassword/>}/>
       </Routes>
     </Router>
    );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/login">
//             <connectedLoginPage />
//           </Route>
//           <Route exact path="/dashboard">
//             <UserDashboard />
//           </Route>
//         </Switch>
//       </Router>
      
//     </div>
//   );
// }

// export default App;





/*
<Route exact path="/login"  element={<PrivateRoute/>}>
  <PrivateRoute exact path="/login"  element={<Login/>}/>
</Route>
*/
  
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