import React,{useState} from 'react';
import * as  icons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import sideBarData  from './navbardata';
import { IoNotifications } from "react-icons/io5";
import Navbar from "./Dropdownprofile";

import './navbar.css';
import { IconContext } from 'react-icons';

function ReciNavBar(){

    const [sideBarDrawer,setComponentsToNavigationBar]= useState(false);

    const displaySideBar = () => setComponentsToNavigationBar(!sideBarDrawer);

    return(
        <>

            <IconContext.Provider value={{color:'#fff'}}>
            
                

                <div id="nav1">
      <nav class="navbar navbar-expand-sm text-light">  
      <Link to="#" className="menu-bars">
        <icons.AiOutlineMenuUnfold onClick={displaySideBar}/></Link>  &nbsp;
        <Link to="/signupPatient" className="menu-bars">  
        <icons.AiOutlineHome onClick={displaySideBar}/>
        </Link>      
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
      

          <ul class="navbar-nav mr-auto"/>        
          <button type="button" class="btn-light  text-dark">English</button>
          <h3>|</h3>  
          <button type="button" class="btn-light text-dark">Sinhala</button>&nbsp;&nbsp;
          <a href="/sidebardata"><IoNotifications/> </a>&nbsp; &nbsp;&nbsp;
          <Navbar/>
        </nav>

      </div>

                <nav className={sideBarDrawer? 'nav-menu active': 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={displaySideBar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <icons.AiOutlineArrowLeft/>
                            </Link>
                        </li>
                        <div>
                        <h3 className='sidebat-text'>APPOINTMENT  </h3>
                        </div>
                       
                        <br/><br/><br/>
                        {sideBarData.map((item,index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.redirect_path}>
                                        {item.icon}
                                        <span>{item.tab_name}</span>
                                    </Link>

                                </li>
                            )
                        }
                        
                        )
                        
                        }


                    </ul>
                    </nav>

            </IconContext.Provider>

            
        </>
    )
}

export default ReciNavBar;