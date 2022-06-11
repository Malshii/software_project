import emailjs from "emailjs-com";
import React from 'react';
import SidebarHeader from "../components/sidebar/SidebarHeader";
import Sidebar_Admin from "../components/sidebar/Admin.sidebar";
import '../Styles/userdashboard.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_qordqlc', e.target, 'T8V01_9Dy3hH8gwfN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

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
        <Sidebar_Admin/>
        <div style={styles.contentMargin}>

        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">          
        </a>
        </nav>           

          <h1 style={{ padding: "20%" }}></h1>   
         
            <div className="container">

            <div class="emailSend shadow shadow-lg p-4 mb-5 bg-white">
            <form onSubmit={sendEmail}>      
              <h1></h1>
              <h2>------SEND EMAILS------</h2>
              <h1></h1>
              <div class="form-row">        
      
                <div class="col-12">
                  <label for="validationCustom01">Name</label>
                  <input type="text" className="form-control" placeholder="Name" name="name"/>                  
                </div>
      
                <div class="col-12">
                  <label for="validationCustom02">Email</label>
                  <input type="email" className="form-control" placeholder="Email Address" name="email"/>                  
                </div>          
              </div>
      
              <div class="form-row">
                <div class="col-12">
                  <label for="validationCustom03">Subject</label>
                  <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                  
                </div>
      
                <div class="col-12">
                  <label for="validationCustom03">Type your message</label>
                  <textarea className="form-control" id="" cols="30" rows="5" placeholder="Your message" name="message"></textarea>
                </div>                    
                
              </div>
              <br/>
              <button class="signup btn btn-primary" type="submit">Send an Email</button>              
              
            </form>
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



