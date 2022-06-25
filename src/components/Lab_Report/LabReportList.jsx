import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
//navigate('/contacts');
//import '../components/OnlinePatientAdd.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import axios from "axios";
import { FiSend } from "react-icons/fi";
//import './form.css';
//import { useParams } from 'react-router-dom';
//import jsPDF from 'jspdf';
import 'jspdf-autotable';// Greeklords6CMS@gmail.com Greeklords#6


function LabReportList() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    
    const checkupId = urlParams.get('checkup_id');
    
  
    /*const current = new Date();
    const today = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;*/

    const [filterData, setFilterData] = useState([]);
    const [users, setUsers] = useState([]);
    

    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/checkupDetails/displaycheckupDetails/");
        setUsers(await response.json());
        console.log(users);
    };

    /*const getAllpatients = async () => {
        const response = await fetch("http://localhost:4004/doctors/");
        setpatients(await response.json());
        console.log(users);
    };*/


    useEffect(() => {
        getAllUser();
        
    }, []);
    

   const checkupData = (e) => {

        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.report_status == "finish";
        })
        

        setFilterData(checkupData);

        //setpatientsFilter(filteredpatient);
    }
    
    //var urlap = `http://localhost:4004/MedicalRequests/update/${uniqid}`;
    //console.log(c);

   
    const navigate = useNavigate();
    function sendData(e) {
        e.preventDefault();
        
        var firstname = document.forms["lab_form"]["f_name"].value;
        var lastname = document.forms["lab_form"]["l_name"].value;
        var collectedDate = document.forms["lab_form"]["coll_date"].value;
        var dob = document.forms["lab_form"]["dob"].value;
        var age = document.forms["lab_form"]["age"].value;
        var mobileno = document.forms["lab_form"]["mobile_no"].value;
        var email = document.forms["lab_form"]["email"].value;
        var address = document.forms["lab_form"]["home_add"].value;
        var report_status = document.forms["lab_form"]["status"].value;
        var issuedDate = document.forms["lab_form"]["issue_date"].value;
        var description = document.forms["lab_form"]["lab_report_description"].value;
       
        const updateLab = {
            firstname,
            lastname,
            collectedDate,
            dob,
            age,
            mobileno,
            email,
            address,
            report_status,
            issuedDate,
            description,
            
        }
        var report_status="finished";
       /* axios.post("http://localhost:4004/MedicalReports/add", updateMedical).then(() => {
            alert("Medical report issued")
        }).catch((err) => {
            alert(err)
        })*/
        
        axios.put(`http://localhost:4000/checkupDetails/checkupDetails/${checkupId}`, updateLab).then(() => {
            alert("Lab Report staus updated")
        }).catch((err) => {
            alert(err)
        })
        navigate(`/ReqMedicalReportList`);
        //navigate(`/Signaturepadarea?doc_id=${DoctorName}`);//`/MedicalIssueForm?doc_id=${doctor_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}&u_name=${ce.first_name}&l_name=${ce.last_name}&add=${ce.address}&company=${ce.workingplace}&reqd=${ce.reqestedDate}&e_d=${ce.Effected_Date}`
    }
    

  
          
    return (
        <>
        {filterData.map((e)=>(
       <div className="form" onSubmit={sendData} onClick={checkupData}>
      <div className="container">
      <form className="was-validated">
      <div>
          <h3 className="text">LAB REPORT DETAILS</h3>
      </div>

      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom01">Checkup Number</label>
      <input type="text" class="form-control" id="validationCustom01" name="c_id" value={e.id}  placeholder="checkup number" required/>
      <div class="invalid-feedback">Please enter checkup number</div>
      </div>
      </div>

      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom02">First name</label>
      <input type="text" class="form-control" id="validationCustom02" name="f_name" value={e.firstname} placeholder="first name" required/>
      <div class="invalid-feedback">Please enter first name</div>
      </div>

      <div class="col-md-6 mb-3">
      <label for="validationCustom03">Last name</label>
      <input type="text" class="form-control" id="validationCustom03" name="l_name" value={e.lastname} placeholder="last name" required/>
      <div class="invalid-feedback">Please enter last name</div>
      </div>
      </div>

      <div class="form-row">
      <div className="col-md-6 mb-3">
      <label for="validationDate1" >Collected Date</label>
      <input type="date" class="form-control" id="validationDate1" name="coll_date" value={e.collectedDate}  required/>
      <div class="invalid-feedback">Please enter collected date.</div>
      </div>
      
      
      <div className="col-md-6 mb-3">
      <label for="validationDate2" >Date of Birth</label>
      <input type="date" class="form-control" id="validationDate2" name="dob" value={e.dob}  required/>
      <div class="invalid-feedback">Please available date.</div>
      </div>
      </div>
   
      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom04">Age</label>
      <input type="text" class="form-control" id="validationCustom04" name="age" value={e.age} placeholder="age" required/>
      <div class="invalid-feedback">Please enter age</div>
      </div>
      

      <div class="col-md-6 mb-3">
      <label for="validationCustom05">Mobile Number</label>
      <input type="text" class="form-control" id="validationCustom05" name="mobile_no" value={e.mobileno} placeholder="+94 xxxxxxxxx" required/>
      <div class="invalid-feedback">Please enter working number</div>
      </div>
      </div>

      <div class="row-md-6 mb-3">
      <label for="vemailalidationCustom06">Email Address</label>
      <input type="text" class="form-control" id="validationCustom06" name="email" value={e.email} placeholder="abc@gmail.com" required/>
      <div class="invalid-feedback">Please enter valid email</div>
      </div>

      <div class="row-md-6 mb-3">
      <label for="validationCustom07">Home Address</label>
      <input type="text" class="form-control" id="validationCustom07" name="home_add" value={e.address} placeholder="Home address" required/>
      <div class="invalid-feedback">Please enter valid address</div>
      </div>  

      <div class="row-md-6 mb-3">
      <label for="validationCustom08">Report Status</label>
      <input type="text" class="form-control" id="validationCustom08" name="status" value={e.report_status} placeholder="report status" required/>
      <div class="invalid-feedback">Please enter report status</div>
      </div>   

      <div class="form-row"> 
      <div className="col-md-6 mb-3">
      <label for="validationDate3" >Issued date</label>
      <input type="date" class="form-control" id="validationDate3" value={e.issuedDate}  name="issue_date" required/>
      <div class="invalid-feedback">Please available issued date.</div>
      </div>
      </div>

      <div class="form-row">
      <div class="row-md-6 mb-3">
      <label for="validationCustom09">Lab Report Description</label>
      <textarea type="text" class="form-control" name="lab_report_description" value={e.description} id="validationCustom09"  placeholder="text here" rows="50" cols="80"  required></textarea>
     <div class="invalid-feedback">Please enter report description</div>
       </div>
       </div>
                        
            <br />
                            
            <button type="submit" class="btn btn-primary">Submit Details&nbsp;<FiSend
                color='white'
                size={25} />
            </button>
                           
            </form>
            </div>

           

            </div>
           ))}
        </>

    );

}

export default LabReportList;
//{filterData.map((ce) => ())};