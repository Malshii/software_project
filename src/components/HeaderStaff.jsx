import React from "react";
import Navbar from "./DropdownStaff";

function Header() {
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
      
      <div>        
        <nav class="navbar navbar-expand-sm bg-light text-dark">  
          <ul class="navbar-nav mr-auto"/>        
          <button type="button" class="btn btn-light text-dark">English</button>
          <h3>|</h3>  
          <button type="button" class="btn btn-light text-dark">Sinhala</button>       
        </nav>        

        <nav class="navbar navbar-expand-sm bg-light">  
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    HOME
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    SERVICES
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    ABOUT US
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    BLOG
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    GALLERY
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    CONTACT US
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="/login">
                    LOGIN
                  </a>
              </li>

              <Navbar/>

          </ul>
        </nav>
        
      </div>       
    </div>
  );
}

export default Header;

