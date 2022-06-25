import React from 'react';
import HomePageImage1 from "../../Resources/Home_img1.jpg";


function Home_Part1(){
    return(
        <div> 
            <img src={HomePageImage1} class="img-fluid" alt="Responsive image"></img>         
            <div id='appointmentBox'>
            <div class="card w-30">
            <div class="card-body">
              <h3 class="card-title">Making Health Care</h3>
              <h3>Better Together</h3>              
              <a href="#" class="btn btn-primary">Make An Appointment</a>
            </div>
            </div> 
            </div>                                   
        </div>
    )
}

export default Home_Part1;

/*
<div class="appointmentBox">
    <h3>Making Health Care</h3>
    <h3>Better Together</h3>
    <button class="btn btn-primary" type="submit">Make An Appointment</button>                              
</div>*/