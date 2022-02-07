import React from 'react';
import HomePageImage1 from "../Resources/Home_img1.jpg";


function Home_Part1(){
    return(
        <div>                
            <img class="imagePart" src={HomePageImage1}/>               
            <div class="appointmentBox">
                 <h3>Making Health Care</h3>
                 <h3>Better Together</h3>
                 <button class="btn btn-primary" type="submit">Make An Appointment</button>                              
            </div>                               
        </div>
    )
}

export default Home_Part1;
