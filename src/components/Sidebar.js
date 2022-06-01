
import Header_Doctor_profile from "./HeaderDoctorProfile";
import sidebar from "./Sidebar";
import Footer from "./AfterloginFutter";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { Component } from 'react';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//import React from 'react';
//import { Route } from 'react-router-dom';
//mport { Router } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
const location = "./", history = "/";

function Doctor() {
    return (
        <div>
            <div>
                <Header_Doctor_profile />
            </div>

            <div>
                <nav>
                    <React.Fragment />
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                <IoHome size={20}/>    
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Doctorprofile">
                                <NavIcon>
                                    <MdOutlineMessage size={20} />
                                </NavIcon>
                                <NavText>
                                    Messeges
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Shedules">
                                <NavIcon>
                                    <GoCalendar size={20} />
                                </NavIcon>
                                <NavText>
                                    Shedules
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Salary Sheet">
                                <NavIcon>
                                    <GiTakeMyMoney size={20} />
                                </NavIcon>
                                <NavText>
                                    Salary Sheet
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Charts">
                                <NavIcon>
                                    <IoStatsChart size={20} />
                                </NavIcon>
                                <NavText>
                                    Charts
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="name">
                                <NavIcon>
                                    <MdOutlineMessage size={20} />
                                </NavIcon>
                                <NavText>
                                    Name
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="name">
                                <NavIcon>
                                    <MdOutlineMessage size={20} />
                                </NavIcon>
                                <NavText>
                                    Name
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="name">
                                <NavIcon>
                                    <MdOutlineMessage size={20} />
                                </NavIcon>
                                <NavText>
                                    Name
                                </NavText>
                            </NavItem>

                        </SideNav.Nav>
                    </SideNav>
                </nav>

            </div>

            <Footer />




        </div>

    )
}

export default Doctor;
