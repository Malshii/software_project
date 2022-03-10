import React from "react";
import '../../index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../Footer";
import Header from "../Header"; 
import Home_Section1 from "../Home.Section1";
import Home_Section2 from "../Home.Section2";
import Home_Section3 from "../Home.Section3";
import Home_Section4 from '../Home.Section4';
import Home_Section5 from "../Home.Section5";
import Home_Section6 from "../Home.Section6";

function Home(){
    return(
        <div>

            <Header/>
           
            <Home_Section1/>
            
            <Home_Section2/>
            
            <Home_Section3/>

            <hr/>

            <Home_Section4/>

            <Home_Section5/>

            <hr/>
            
            <Home_Section6/> 
            
            <Footer/>

        </div>
    )
}

export default Home;
 
