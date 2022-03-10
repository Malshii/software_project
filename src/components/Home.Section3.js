import React from 'react';
import Appointment from "../Resources/Appointment.png";
import Laboratory from "../Resources/laboratory.png";
import Pharmacy from "../Resources/medicine.png";
import Eyecare from "../Resources/eye_care.png";
import Consultation from "../Resources/consultation.png";
import LabTest from "../Resources/lab_test.png";
import LabReport from "../Resources/medical_report.png";
import MyAppointment from "../Resources/my_appointment.png";

function Home_Section3(){
    return(
        <div class="container py-5">            
                <h3 class="text-center font-weight-bold mb-4">Our Services</h3>
                
                <div class="row container py-5">                    
                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">                            
                            <img class="services" src={Appointment}/>                                               
                            <p>Appoinment Booking</p>
                        </div>                    
                    </div> 

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services" src={Laboratory}/>
                            <p>Laboratory Services</p>
                        </div>                 
                    </div> 

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services" src={Pharmacy}/>
                            <p>Pharmacy</p>
                        </div>                   
                    </div> 

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services" src={Eyecare}/>                    
                            <p>Eye Care</p>
                        </div>                    
                    </div> 

                </div>

                <div class="row container py-5">

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services" src={Consultation}/>
                            <p>Consultation</p>
                        </div>                    
                    </div> 

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services"src={LabTest}/>
                            <p>Request Lab Test</p>
                        </div>                  
                    </div>

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services"src={LabReport}/>
                            <p>Request Lab Report</p>
                        </div>                    
                    </div> 

                    <div class="col-lg text-center">
                        <div class="shadow-lg circle">
                            <img class="services"src={MyAppointment}/>
                            <p>My Appoinment</p>
                        </div>           
                    </div> 

                </div>            
        </div>

    )
}

export default Home_Section3;
