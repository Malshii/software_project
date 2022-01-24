import axios from "axios";
import React, { useEffect, useState } from "react";

function AllPatients(){

    const [patients,setPatients] = useState([]);

    useEffect((res)=>{
        function getPatients(){
            axios.get("http:/localhost:4000/patient/").then(()=>{
                setPatients(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
    }) 

    return(
        <div className="container">
            <h1>All Patients</h1>
        </div>
    )
}

export default AllPatients;