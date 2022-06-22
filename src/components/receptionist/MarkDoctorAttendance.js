import React from "react";
import '../../Styles/userdashboard.css';
import axios from "axios";

export default function MarkDoctorAttendance() {
  const mystyle={
    background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
  }

  //If status display cancel send sms to relevant patients. 
  //Else hide send SMS button
  const label = ["Confirmed","Canceled","Pending"]   
  
  function sendSMS(e){
    e.preventDefault();    
        
    document.getElementById("Canceled").onclick = function(){
      axios.post("http://localhost:4000/sendSMS").then(()=>{        
        alert("Message send successfully.");
      }).catch((err)=>{
        alert(err)
      }) 
      // alert("Message send successfully!")
    }
  }

  return (
    <div>
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">          
        </a>
        </nav>           

          <h1 style={{ padding: "15%" }}></h1>          
         
          <div className="container">          
          
          <div className="scheduletableH">
              <h4>Doctor Status</h4>
          </div> 
            <table className="scheduletable">
              <tr>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Time range</th>
                <th>Status</th>
                <th>Mark Attendance</th>
                <th>Send SMS</th>
              </tr>

              <tr>
                <td>Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                <span class="badge badge-dark">{label[0]}</span>               
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
                <td>
                  <button id="Confirmed" class="btn btn-primary" type="submit" onClick={sendSMS}>Click here to send SMS</button>        
                </td>
              </tr>

              <tr id="status2">
                <td>Silva</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>
                <span class="badge badge-dark">{label[0]}</span>                 
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
                <td>
                  <button id="Confirmed" class="btn btn-primary" type="submit" onClick={sendSMS}>Click here to send SMS</button>        
                </td>                             
              </tr>

              <tr id="status3">
                <td>Mohomad</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-danger">{label[1]}</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
                <td>
                  <button id="Canceled" class="btn btn-primary" type="submit" onClick={sendSMS}>Click here to send SMS</button>        
                </td>
              </tr>

              <tr id="status4">
                <td>Atapattu</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-warning">{label[2]}</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
                <td>
                  <button id="Confirmed" class="btn btn-primary" type="submit" onClick={sendSMS}>Click here to send SMS</button>        
                </td>
              </tr>
              
              <tr id="status">
                <td>Yohan Gamage</td>
                <td>2022/02/05</td>
                <td>8am - 5pm</td>
                <td>                  
                <span class="badge badge-warning">{label[2]}</span>
                </td>
                <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>                      
                    </div>            
                </td>
                <td>
                  <button id="Pending" class="btn btn-primary" type="submit" onClick={sendSMS}>Click here to send SMS</button>        
                </td>
              </tr>    

            </table>
          </div>             
         
        </div>        

  );
}
