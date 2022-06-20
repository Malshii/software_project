import React, { useState, useEffect } from "react";
//import '../components/OnlinePatientAdd.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import './form.css';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';// Greeklords6CMS@gmail.com Greeklords#6


function MedicalIssueForm() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u_id = urlParams.get('id');
    const doc_id = urlParams.get('doc_id');
    const appinmentid = urlParams.get('appinmentid');
  
    const [filterData, setFilterData] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4004/doctors/");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    const doctorFilterData = (e) => {

        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users._id == doc_id;
        })

        setFilterData(

            filteredData
        );


    }

    
    //console.log(c);

    // var a="kavindi";
    //const [firstname, setFirstName] = useState("");
    /*const [lastname, setLastName] = useState("");
    const [OPD_no, setOPD_no] = useState("");
    const [reciep_no, setReciep_no] = useState("");
    const [workingplace, setWorkingplace] = useState("");
    const [address, setAddress] = useState("");
    const [reqestedDate, setReqestedDate] = useState("");
    const [EffectedDate, setEffectedDate] = useState("");
    const [doctorDescription, setDoctorDescription] = useState("");
    const [other_recomendation, setOther_recomendation] = useState("");
    const [recemendedDateDuration, setRecemendedDateDuration] = useState("");
    const [DoctorName, setDoctorName] = useState("");
    const [Designation, setDesignation] = useState("");
    const [isseedDate, setIsseedDate] = useState("");*/

    function sendData(e) {
        e.preventDefault();
        var firstname = document.forms["medical_form"]["first_name"].value;
        var lastname = document.forms["medical_form"]["lastName"].value;
        var OPD_no = document.forms["medical_form"]["OPD_no"].value;
        var reciep_no = document.forms["medical_form"]["rec_no"].value;
        var workingplace = document.forms["medical_form"]["workingplace"].value;
        var address = document.forms["medical_form"]["address"].value;
        var reqestedDate = document.forms["medical_form"]["inputDate1"].value;
        var EffectedDate = document.forms["medical_form"]["inputDate2"].value;
        var doctorDescription = document.forms["medical_form"]["validationCustom06"].value;
        var other_recomendation = document.forms["medical_form"]["other"].value;
        var recemendedDateDuration = document.forms["medical_form"]["Duration"].value;
        var DoctorName = document.forms["medical_form"]["validationCustom09"].value;
        var Designation = document.forms["medical_form"]["doc_name"].value;
        var isseedDate = document.forms["medical_form"]["inputDate3"].value;
        const updateMedical = {
            firstname,
            lastname,
            OPD_no,
            reciep_no,
            workingplace,
            address,
            reqestedDate,
            EffectedDate,
            doctorDescription,
            other_recomendation,
            recemendedDateDuration,
            DoctorName,
            Designation,
            isseedDate,
        }
        axios.post("http://localhost:4004/MedicalReports/add", updateMedical).then(() => {
            alert("Online Patient Added")
        }).catch((err) => {
            alert(err)
        })

    }
    //get data
    //onSubmit={sendData}
   /* {filterData.map((ce) => (
                                <p>{ce.firstname}</p>
                            ))};*/ 
    return (
        <>
            <div className="form-body">
                <HeaderDoctorProfile /><p>{doc_id}</p>
                <div className="form" onSubmit={sendData} onClick={doctorFilterData}>
                    <div className="container">
                        <form className="was-validated" name="medical_form">
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom01">First name of the patient</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name" value="chamara" placeholder="first name" required />
                                    <div class="invalid-feedback">Please enter first name</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom02">Last name of the patient</label>
                                    <input type="text" class="form-control" name="lastName" id="lastName" value="Sudarshana" placeholder="last name" required />
                                    <div class="invalid-feedback">Please enter last name</div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom03">OPD_no</label>
                                    <input type="text" class="form-control" name="OPD_no" id="OPD_no" value="7890" placeholder="OPD_no" required />
                                    <div class="invalid-feedback">Please enter OPD_no</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom04">recieption number</label>
                                    <input type="text" class="form-control" name="rec_no" id="rec_no" value={appinmentid} placeholder="recieption number" required />
                                    <div class="invalid-feedback">Please enter recieption number</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="validationCustom05">working place</label>
                                <input type="text" class="form-control" name="workingplace" id="workingplace" value="ABC (pvt)ltd" placeholder="workingplace" required />
                                <div class="invalid-feedback">Please enter working place</div>
                            </div>
                            <div class="form-group">
                                <label for="validationCustom06">Adress</label>
                                <input type="text" class="form-control" name="address" id="address" value="1234, Main St, ...." placeholder="1234, Main St, ...." required />
                                <div class="invalid-feedback">Please enter Adress</div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputDate1">Reqested Date</label>
                                    <input type="Date" class="form-control" name="inputDate1" id="inputDate1" value="2021-07-09" placeholder="Reqested Date" required />
                                    <div class="invalid-feedback">Please enter Reqested Date</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputDate2">Effected Date</label>
                                    <input type="Date" class="form-control" name="inputDate2" id="inputDate2" value="2021-07-13" placeholder="Reqested DateEffectedDate" required />
                                    <div class="invalid-feedback">Please enter Effected Date</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="validationCustom06">Doctor Description</label>
                                <input type="text" class="form-control" id="validationCustom06" name="validationCustom06" placeholder="" required />
                                <div class="invalid-feedback">Please enter doctor description</div>
                            </div>
                            <div class="form-group">
                                <label for="Duration">Duration</label>
                                <input type="number" class="form-control" id="Duration" name="Duration" placeholder="Duration" required />
                                <div class="invalid-feedback">Please enter doctor Duration</div>
                            </div>
                            <div class="form-group">
                                <label for="other">Other Recomendation</label>
                                <input type="text" class="form-control" id="other" name="other" placeholder="" />
                                <div class="invalid-feedback">Please enter Other Recomendation</div>
                            </div>

                            <div class="form-row">

                                <div class="col-md-6 mb-6">
                                    <label for="category" >Designation</label>
                                    <select class="custom-select" id="validationCustom09" name="validationCustom09" required >
                                        <option selected disabled value="">Choose...</option>
                                        <option value="House Officer">House Officer</option>
                                        <option value="RegisteredHouse Officer">RegisteredHouse Officer</option>
                                        <option value="Medical Officer">Medical Officer</option>
                                        <option value="Regostrar">Regostrar</option>
                                        <option value="Senior Registrar">Senior Registrar</option>
                                        <option value="Consultant">Consultant</option>

                                    </select>
                                    <div class="invalid-feedback">Pleasw  select the Category</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputDate3">Date</label>
                                    <input type="Date" class="form-control" id="inputDate3" name="inputDate3" placeholder="issueed Date" required />
                                    <div class="invalid-feedback">Please enter Date</div>
                                </div>



                            </div>
                            {filterData.map((ce) => (
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="reg_num">Registration Number</label>
                                        <input type="text" class="form-control" id="reg_no" name="reg_no" value={ce.registrationNumber} placeholder="registration Number" required />
                                        <div class="invalid-feedback">Please enter Doctor Name</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="reg_num">Doctor Name</label>
                                        <input type="text" class="form-control" id="doc_name" name="doc_name" value={ce.firstname + " " + ce.lastname} placeholder="DoctorName" required />
                                        <div class="invalid-feedback">Please enter Doctor Name</div>
                                    </div>
                                </div>
                            ))};
                            

                            <br />
                            <button type="submit" class="btn btn-primary">Submit Details&nbsp;<FiSend
                                color='white'
                                size={25} />
                            </button>

                        </form>
                    </div>

                    <div class="doc_footer">

                        <AfterloginFutter />
                    </div>

                </div>
            </div>

        </>

    );

}

export default MedicalIssueForm;