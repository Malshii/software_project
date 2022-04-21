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

          <div class="shadowNewSchedule shadow-lg p-4 mb-5 bg-white">
              <form>               
                <h4>--ADD NEW SCHEDULE--</h4>
                <h1></h1>

                <div class="form-row">
                  <div class="col-12">
                    <label for="validationCustom03">Doctor ID</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="A001" required/>
                    <div class="invalid-feedback">
                      Please provide a valid ID.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="validationCustom03">New schedule</label>
                    <input type="date" class="form-control" id="validationCustom03" placeholder="new schedule" required/>                    
                  </div>                 

                </div>

                <div class="form-group">
                  <div class="form-check">           
                  </div>
                </div>

                <button class="signup btn btn-primary" type="submit">Add New Schedule</button>                      

              </form>
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
