import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Doctor1 from "../Resources/Doctor1.jpg";
import Doctor2 from "../Resources/Doctor2.jpg";
import Doctor3 from "../Resources/Doctor3.jpg";

export default () => (
    <div>    
        <h3 class="text-center font-weight-bold mb-4">Our Doctors</h3>    
    <Carousel autoPlay>

        <div>
            <div class="row">
                <div class="col-sm">                
                    <img src={Doctor1}/>                    
                    <h4>Dr. Rohitha Seneviratne</h4>
                    <p>Cardiologist</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>                                      
                </div>
                <div class="col-sm">
                    <img src={Doctor2}/>                    
                    <h4>Dr. Shalinie Nanayakkara</h4>
                    <p>Paediatrician</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>  
                </div>
                <div class="col-sm">
                    <img src={Doctor3}/>                    
                    <h4>Dr. Ravi Dissanayake</h4>
                    <p>Clinical Psychologist</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>  
                </div>
            </div>            
        </div> 

        <div>
        <div class="row">
                <div class="col-sm">                
                    <img src={Doctor1}/>                    
                    <h4>Dr. Rohitha Seneviratne</h4>
                    <p>Cardiologist</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>                                      
                </div>
                <div class="col-sm">
                    <img src={Doctor2}/>                    
                    <h4>Dr. Shalinie Nanayakkara</h4>
                    <p>Paediatrician</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>  
                </div>
                <div class="col-sm">
                    <img src={Doctor3}/>                    
                    <h4>Dr. Ravi Dissanayake</h4>
                    <p>Clinical Psychologist</p>
                    <button class="btn btn-primary" type="submit">View Profile</button>  
                </div>
            </div>                 
        </div> 
    </Carousel>
    </div>
);


