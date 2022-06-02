import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import Sidebar from "../sidebar/User.sidebar";
import '../../index.css';

export default function AppointmentHistory() {
  const styles = {
    contentDiv: {
      display: "flex",            
    },
    contentMargin: {
      marginLeft: "20px",
      width: "100%",
    },    
  };
  return (
    <div>    
      <SidebarHeader/>
            
      <div style={styles.contentDiv}>
        <Sidebar/>
        <div style={styles.contentMargin}>

        <nav class="navbar navbar-light bg-light">
        
        </nav> 

          <nav class="navbar navbar-expand-lg navbar-light">            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">                                        
                <li class="nav-item">
                  <a class="nav-link" href="/dashboard">E-Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Find your Doctors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My Appointments</a>
                </li>
              </ul>
            </div>
          </nav>

          <h1 style={{ padding: "20%" }}></h1>     

          <div class="appointmentHistory card w-75">
            <div class="card-body">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Last Appointment</a>
                </li>               
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">History</a>
                </li>
              </ul>
              <p></p>
              <p></p>
              <p class="historycontent card-text"><b>Specialist</b> - Cardiology, <b>Doctor Name</b> - Dr.Rajitha Senaratne, <b>Channeling Amount</b> -  Rs. 2500.00, 
              <b>Channeling No</b> - 04, <b>Available Time</b> - 06.30 PM</p> 
              <p></p>
              <p class="historycontent card-text"><b>Specialist</b> - Cardiology, <b>Doctor Name</b> - Dr.Rajitha Senaratne, <b>Channeling Amount</b> -  Rs. 2500.00, 
              <b>Channeling No</b> - 04, <b>Available Time</b> - 06.30 PM</p> 
              <p></p>
              <p class="historycontent card-text"><b>Specialist</b> - Cardiology, <b>Doctor Name</b> - Dr.Rajitha Senaratne, <b>Channeling Amount</b> -  Rs. 2500.00, 
              <b>Channeling No</b> - 04, <b>Available Time</b> - 06.30 PM</p>              
            </div>
          </div>
         
        </div>
      </div>

      <div class="footer-c py-2">
            <div class="container text-center">
                <p class="text-light mb-0 py-2">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
                <h6 class="text-light mb-0 py-2">Solution by Greeklords</h6>
            </div>
        </div>
        
    </div>
  );
}
