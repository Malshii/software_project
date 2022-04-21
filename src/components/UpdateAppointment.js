import React, {useState} from "react";
import SidebarHeader from "./sidebar/SidebarHeader";
import Sidebar from "./sidebar/User.sidebar";
import '../userdashboard.css';

function ButtonIncrement(props) {
  
    return (     
      <a class="btn btn-primary"  onClick={props.onClickFunc}>Add Appointment</a>
    )
 }
 
 function ButtonDecrement(props) {
   
   return (
      <a class="updatebtn btn btn-primary"  onClick={props.onClickFunc}>Remove Appointment</a>
   )
 }
 
 function Display(props) {
   return (    
     <h4 class="card-title">{props.message}</h4> 
   )
 }

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

  //Update count 
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }

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

        <h4 className="appointmenttitle">UPDATE DAILY APPOINTMENTS</h4> 
    
        <div class="cardUpdateAppoinment card">
              <div class="card-body">
                <Display message={counter}/> 
                
                <div class="row">
                <div class="col-md-4 form-group text-center">
                    <ButtonIncrement onClickFunc={incrementCounter}/>  
                </div>                
                <div class="col-md-4 form-group text-center">
                    <ButtonDecrement onClickFunc={decrementCounter}/>
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
