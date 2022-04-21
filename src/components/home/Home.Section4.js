import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Doctor1 from "../../Resources/Doctor1.jpg";
import Doctor2 from "../../Resources/Doctor2.jpg";
import Doctor3 from "../../Resources/Doctor3.jpg";

export default () => (
    <div className='container'>    
        <h3 class="text-center font-weight-bold mb-4">Our Doctors</h3>    
    
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>


        <div class="carousel-inner">
        <div class="carousel-item active">
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

        <div class="carousel-item">
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
        </div>             

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


    </div>
);


/*
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
    </Carousel>*/