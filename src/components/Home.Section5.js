import React from 'react';
import PatientReview from "../Resources/Patient_Reviews_Img.jpg";
import DoctorReview from "../Resources/Doctor_Reviews_Img.jpg";
import Direction from "../Resources/Direction_Img.jpg";

function Home_Section5(){
    return(
        <div class="reviews">

            <div class="container py-5">
                <div class="row">

                    <div class="col-lg text-center">
                        <h5 class="font-weight-bold">Patient Reviews</h5>
                        <img class="patientReview" src={PatientReview}/>
                        <p>Recently visited health check up department of Apollo Hospital for a whole body check up. 
                        The entire process from check in to the end was seamless. The staff at the health check department was courteous, 
                        helpful and very attentive. I would highly recommend this hospital to anyone
                        looking for something similar services.                        
                        </p>
                        <p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>  
                        </p>                                 
                        <button class="btn btn-light text-dark" type="submit">View More</button>  
                    </div>

                    <div class="col-lg text-center">                       

                        <div class="row">

                            <div class="col-lg">
                            <h5 class="font-weight-bold">Doctors Reviews</h5>
                            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div class="col-lg">
                            <img class="dReview  mb-4" src={DoctorReview}/>
                            </div>

                        </div>

                        <div class="row">                            
                            <h5 class="text-right font-weight-bold mb-4">Get Direction</h5>
                            <img src={Direction}/>   
                        </div>

                    </div>

                </div>
            </div>


        </div>

    )
}

export default Home_Section5;
