import React, { useState, useEffect } from "react";
import axios from "axios";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';

function ConfirmNewSchedule() {

    const [filterData, setFilterData] = useState([])

    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4004/doctors/");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    const styles = {
        contentDiv: {
            display: "flex",
        },
        contentMargin: {
            marginLeft: "20px",
            width: "100%",
        },
    };

    const mystyle = {
        background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
    }

    return (
        <div>


            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>

                    <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="#">
                        </a>
                    </nav>

                    <h1 style={{ padding: "20%" }}></h1>

                    <div className="container">

                        <div className="scheduletableH" style={mystyle}>
                            <h4>Medical Report Reqest </h4>
                        </div>
                        <table className="scheduletable">
                            
                            {users.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                <th>Doctor Name</th>
                                <th>&emsp; &emsp;</th>
                                <th>Date</th>
                                <th>&emsp; &emsp;</th>
                                <th>Time range</th>
                                <th>&emsp; &emsp;</th>
                                <th>Decision</th>
                            </tr>

                                    <tr>
                                        <td >
                                            {ce.firstname}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            {ce.lastname}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" class="btn btn-danger">View Details</button>&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" class="btn btn-dark">Confirm reqest</button>&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>

                                            <button type="button" class="btn btn-danger">Reject request</button>
                                        </td>
                                    </tr>



                                </div>
                            ))}


                        </table>

                    </div>
                    <br></br>
                    <div className="container">

<div className="scheduletableH" style={mystyle}>
    <h4>Validated Medical Report Reqest </h4>
</div>
<table className="scheduletable">
    
    {users.map((ce) => (
        <div key={ce.id}>
            <tr>
        <th>Doctor Name</th>
        <th>&emsp; &emsp;</th>
        <th>Date</th>
        <th>&emsp; &emsp;</th>
        <th>Time range</th>
        <th>&emsp; &emsp;</th>
        <th>Decision</th>
    </tr>

            <tr>
                <td >
                    {ce.firstname}
                </td>
                <td>&emsp; &emsp;</td>
                <td>
                    {ce.lastname}
                </td>
                <td>&emsp; &emsp;</td>
                <td>
                    <button type="button" class="btn btn-danger">View Details</button>&nbsp;
                </td>
                <td>&emsp; &emsp;</td>
                <td>
                    <button type="button" class="btn btn-dark">Confirm reqest</button>&nbsp;
                </td>
                <td>&emsp; &emsp;</td>
                <td>

                    <button type="button" class="btn btn-danger">Reject request</button>
                </td>
            </tr>



        </div>
    ))}


</table>

</div>

                </div>
            </div>
            <br></br>

            <div class="footer-c py-2">
                <div class="container text-center">
                    <p class="text-light mb-0 py-2">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
                    <h6 class="text-light mb-0 py-2">Solution by Greeklords</h6>
                </div>
            </div>


        </div>
    );
}

export default ConfirmNewSchedule;