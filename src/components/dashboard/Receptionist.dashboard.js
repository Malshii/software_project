import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import Sidebar from "../sidebar/User.sidebar";
import '../../userdashboard.css';

export default function DoctorDashboard() {
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
        <a class="navbar-brand" href="#">          
        </a>
        </nav>           

          <h1 style={{ padding: "20%" }}></h1>          
         
          <div className="container">
         
          <div class="row">
          <div class="col-sm-6">
            <div class="cardRow1 card">
              <div class="card-body">
                <h5 class="card-title">All Appointment</h5>                
                <a href="#" class="dboard1 btn">Check Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cardRow1 card">
              <div class="card-body">
                <h5 class="card-title">Make an Appointment</h5>                
                <a href="#" class="dboard1 btn">Book Now</a>
              </div>
            </div>
          </div>          
        </div>


        <div class="row">
        <div class="col-sm-6">
        <div class="cardRow2 card">
          <div class="card-body">
            <h5 class="card-title">View Medical Report Requests</h5>                
            <a href="#" class="dboard1 btn">View Now</a>
          </div>
        </div>
        </div>

        <div class="col-sm-6">
            <div class="cardRow2 card">
              <div class="card-body">
                <h5 class="card-title">Update Appointments</h5>               
                <a href="/updateAppointment" class="dboard btn">Update Now</a>
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
