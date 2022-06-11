import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import Sidebar_Admin from "../sidebar/Admin.sidebar";
import '../../Styles/userdashboard.css';

export default function ConfirmNewSchedule() {
  const styles = {
    contentDiv: {
      display: "flex",            
    },
    contentMargin: {
      marginLeft: "20px",
      width: "100%",
    },    
  };

  const mystyle={
    background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
  }

  return (
    <div>    
      <SidebarHeader/>
            
      <div style={styles.contentDiv}>
        <Sidebar_Admin/>
        <div style={styles.contentMargin}>

        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">          
        </a>
        </nav>           

          <h1 style={{ padding: "20%" }}></h1>          
         
          <div className="container">          
          
          <div className="scheduletableH" style={mystyle}>
              <h4>New Schedules</h4>
          </div> 
            <table className="scheduletable">
              <tr>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Time range</th>
                <th>Decision</th>
              </tr>
              <tr>
                <td>Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                  <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
                  <button type="button" class="btn btn-danger">Reject request</button>
                </td>
              </tr>
              <tr>
                <td>Silva</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                  <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
                  <button type="button" class="btn btn-danger">Reject request</button>
                </td>
              </tr>
              <tr>
                <td>Mohomad</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                  <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
                  <button type="button" class="btn btn-danger">Reject request</button>
                </td>
              </tr>
              <tr>
                <td>Atapattu</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                  <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
                  <button type="button" class="btn btn-danger">Reject request</button>
                </td>
              </tr>
              <tr>
                <td>Yohan Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                  <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
                  <button type="button" class="btn btn-danger">Reject request</button>
                </td>
              </tr>            
            </table>
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
