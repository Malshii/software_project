import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoListSharp } from "react-icons/io5";
import Navbar from "./Dropdownprofile";

function Header_Doctor_profile() {
  return (
    <div>

<div id="nav1">
      <nav class="navbar navbar-expand-sm text-light">        
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"/>                      
          <span class="navbar-text">
          <i class="fas fa-phone-volume"></i>&nbsp;            
            Emergency 034 3344444 | +9471 2323333 
          </span>
        </div>
      </nav>
      </div>

      <div id="nav1">
      <nav class="navbar navbar-expand-sm bg-light text-dark"> 
          <a href="/Adminview"><IoListSharp /> </a> &nbsp;&nbsp;
          <a href="/Adminview"><IoHome /> </a>
          <ul class="navbar-nav mr-auto"/>        
          <button type="button" class="btn-light text-dark">English</button>
          <h3>|</h3>  
          <button type="button" class="btn-light text-dark">Sinhala</button>&nbsp;&nbsp;
          <a href="/signupPatient"><IoNotifications/> </a>&nbsp; &nbsp;&nbsp;
          <Navbar/>
        </nav>

      </div>
      
    </div>
  );
}

export default Header_Doctor_profile;


