import React from "react";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import Sidebar_Admin from "../components/sidebar/Admin.sidebar";
import '../userdashboard.css';

export default function MarkDoctorAttendance() {
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
              <h4>Doctor Status</h4>
          </div> 
            <table className="scheduletable">
              <tr>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Time range</th>
                <th>Status</th>
                <th>Mark Attendance</th>
              </tr>
              <tr>
                <td>Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                <span class="badge badge-dark">Confirmed</span>               
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
              </tr>
              <tr>
                <td>Silva</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                <span class="badge badge-dark">Confirmed</span>                 
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
              </tr>
              <tr>
                <td>Mohomad</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-danger">Canceled</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
              </tr>
              <tr>
                <td>Atapattu</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-danger">Canceled</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
              </tr>
              <tr>
                <td>Yohan Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-warning">Pending</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
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
