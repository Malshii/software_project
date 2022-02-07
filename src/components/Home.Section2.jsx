import React from 'react';
import Lab from "../Resources/lab.png";
import Ambulance from "../Resources/ambulance.png";
import OPD from "../Resources/opd.png";

function Home_Section2(){
    return(
        <div class="specialServices">
                <div class="container py-5">
                <div class="row text-light">

                    <div class="col-lg text-center">
                        <img class="services mb-4" src={Lab}/>
                        <h5 claa="mb-4">Laboratory Services</h5>
                        <p class="text-left">We provide an extensive range of laboratory services including genetics and specialized tests. We are well aware that your wellbeing 
                        depends on the accuracy of our diagnostic reports.</p>
                    </div>
                    <div class="col-lg text-center">
                        <img class="services mb-4" src={Ambulance}/>
                        <h5 claa="mb-4">Ambulance Services</h5>
                        <p class="text-left">Efficiency, speed and professionalism is key with our ambulance service, all ambulances are state of the art mobile ICUs and with its medical squad offers services such as Patient transfers and pickups, event coverage and medical evacuation by air..
                        </p>
                    </div>
                    <div class="col-lg text-center">
                        <img class="services mb-4" src={OPD}/>
                        <h5 claa="mb-4">O.P.D services</h5>    
                        <ul class="list-unstyled">                
                            <li class="mb-2 text-left">Provide 24 hour service for O.P.D patients Admission of the patients</li> 
                            <li class="mb-2 text-left">OPD Treatments</li> 
                            <li class="mb-2 text-left">IInjections</li> 
                            <li class="mb-2 text-left">Referring to Consultants</li>
                            <li class="mb-2 text-left">Medical Advice</li>
                            <li class="mb-2 text-left">Medical Checkups</li>
                            <li class="mb-2 text-left">Accidents & Emergency treatment</li>                      
                        </ul>
                    </div>

                </div>
                </div>
        </div>

    )
}

export default Home_Section2;