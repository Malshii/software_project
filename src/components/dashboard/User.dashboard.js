import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import Sidebar from "../sidebar/User.sidebar";
import '../../userdashboard.css';

export default function UserDashboard() {
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
                  <a class="nav-link" href="/dashboard/appointmenthistory">My Appointments</a>
                </li>
              </ul>
            </div>
          </nav>

          <h1 style={{ padding: "20%" }}></h1>          
         
          <div className="container">
          <div class="row">
          <div class="col-sm-6">
            <div class="cardRow1 card">
              <div class="card-body">
                <h5 class="card-title">Make an Appointment</h5>                
                <a href="#" class="dboard btn">Book Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardRow1 card">
              <div class="card-body">
                <h5 class="card-title">Request Lab Report</h5>               
                <a href="#" class="dboard btn">Request Now</a>
              </div>
            </div>
          </div>
        </div>         

        <div class="row">
        <div class="col-sm-6">
            <div class="cardRow2 card">
              <div class="card-body">
                <h5 class="card-title">Request Medical Report</h5>               
                <a href="#" class="dboard btn">Request Now</a>
              </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="cardRow2 card">
              <div class="card-body">
                <h5 class="card-title">Ask a Doctors</h5>               
                <a href="#" class="dboard btn">Ask Now</a>
              </div>
            </div>
        </div>
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
