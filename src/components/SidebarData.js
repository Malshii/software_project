import React from 'react';
import { IoListSharp } from "react-icons/io5";

export const SidebarData =[
    {
        title:"home",
        path:'/Login',
        icon:<IoListSharp/>,
        cName:"nav-text"
    },
    {
        title:"Login",
        path:'/Login',
        icon:<IoListSharp/>,
        cName:"nav-text"
    },
    {
        title:"home",
        path:'/',
        icon:<IoListSharp/>,
        cName:"nav-text"
    },
]





import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import { IoListSharp } from "react-icons/io5";
import {SidebarData} from "./SidebarData";
function Sidebar(){
    const[Sidebar,setSidebar]=useState(false)

    const showsidebar = ()=> setSidebar(!Sidebar)
    return(   
        <>
        <dev classname="navbar">
            <Link to="" className='menu-bar'>
                <IoListSharp onClick={showsidebar}/>
            </Link>
        </dev>
        <nav className={'nav-menu active  nav-menu'}>
         <ul className='nav-menu-item'>
             <li className='navbar-toggle'>
                 <Link to="#" className='menu-bars'>
                 <IoListSharp/> 
                 </Link>
             </li>
             {SidebarData.map((item,index)=>{
                 return(
                     <li key={index} className={item.cName}>
                         <link to={item.path}>
                             {item.icon}
                             <span>{item.title}</span>
                         </link>
                     </li>
                 )
             })}
         </ul>
        </nav>
:        </>         
    )
}

export default Sidebar;
