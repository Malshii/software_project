import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import Sidebar from "../sidebar/User.sidebar";
import '../../Styles/userdashboard.css';

export default function DoctorDashboard() {
  const styles = {
    contentDiv: {
      display: "flex",            
    },
    contentMargin: {
      marginLeft: "1rem",
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

        <h4 className="appointmenttitle">CHECK DAILY APPOINTMENTS</h4>                 
          
          <div class="cardAppoinment card">
              <div class="card-body">
                <h4 class="card-title">20</h4>        

                <div class="row">
                <div class="col-md-4 form-group text-center">
                    <a href="#" class="btn btn-primary">Confirm Appointment</a>
                </div>                
                <div class="col-md-4 form-group text-center">
                <a href="#" class="cancel btn btn-primary">Cancel Appointment</a>
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
