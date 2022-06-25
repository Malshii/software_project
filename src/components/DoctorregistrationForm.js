import React from "react";
import '../index.css';
import Footer from "./AfterloginFutter";
import Header_Doctor_profile from "./HeaderDoctorProfile";
import { MdSettingsPower } from "react-icons/md";
import { FiSend } from "react-icons/fi";
//import Sidebar from "./Sidebar";

function DoctorregistrationForm() {
  return (
    <>
      <div class="Doctor_reg_view">
        <Header_Doctor_profile />
        <form class="formDoc was-validated">
          <h2>---Doctor Registration---</h2>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">First name</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="first name" required />
              <div class="invalid-feedback">Please enter first name</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationCustom02">First name</label>
              <input type="text" class="form-control" id="validationCustom02" placeholder="last name" required />
              <div class="invalid-feedback">Please enter last name</div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-6">
              <label for="validationCustom03" >Title</label>
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option value="Mr">Mr.</option>
                <option value="Miss">Miss.</option>
                <option value="Mrs">Mrs.</option>
              </select>
              <div class="invalid-feedback">Pleasw  select the title</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationCustom04">Working Hospital</label>
              <input type="text" class="form-control" id="validationCustom04" placeholder="Working Hospital" required />
              <div class="invalid-feedback">Please enter Working Hospital</div>
            </div>
          </div>
          <div class="form-group">
            <label for="validationCustom05">Adress</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="1234, Main St, ...." required />
            <div class="invalid-feedback">Please enter Adress</div>
          </div>
          <div class="form-group">
            <label for="validationCustom06">University</label>
            <input type="text" class="form-control" id="validationCustom06" placeholder="University of ......." required />
            <div class="invalid-feedback">Please enter University</div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required />
              <div class="invalid-feedback">Please enter Email</div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" required />
              <div class="invalid-feedback">Please enter Password</div>
            </div>
          </div>

          <div class="form-row">

          <div class="col-md-6 mb-6">
              <label for="category" >Category</label>
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option value="Catogory">Category 1</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">Pleasw  select the Category</div>
            </div>
            <div class="form-group col-md-6">
              <label for="reg_num">Registration Number</label>
              <input type="text" class="form-control" id="reg_num" placeholder="XXXXXX" required />
              <div class="invalid-feedback">Please enter Registration Number</div>
            </div>

          </div>
          <div class="form-row">

            <div class="form-group col-md-6">
              <label for="charge">Charge Per Patient</label>
              <input type="text" class="form-control" id="charge" placeholder="1500/=" required />
              <div class="invalid-feedback">Please enter Charge Per Patient</div>
            </div>
            <div class="form-group col-md-6">
              <label for="mobileNo">Mobile Number</label>
              <input type="text" class="form-control" id="mobileNo" placeholder="Mobile Number(+94)" required />
              <div class="invalid-feedback">Please enter Mobile Number</div>
            </div>

          </div>
          <div class="form-group">
            <label for="degree">Degree</label>
            <input type="text" class="form-control" id="inputDegree" placeholder="MBBS" required />
            <div class="invalid-feedback">Please enter Degrees</div>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Submit Details&nbsp;<FiSend 
          color='white'
           size={25}/>
          </button>
        </form>
        <div class="doc_footer">
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
          <br /><br />
          <Footer />
        </div>
      </div>


    </>
  )
};






export default DoctorregistrationForm;