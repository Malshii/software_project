import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import Header_Doctor_profile from "./HeaderDoctorProfile";
import Footer from "./AfterloginFutter";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonCircle } from "react-icons/bs";
import { MdSettingsPower } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

function Navbar() {
  return (
    <div class="Doctor_reg_view">
      <Header_Doctor_profile />
      <form class="formDoc was-validated">
      <h2>---Reqest Medical Report---</h2>
      <div class="col-md-20 mb-3">
          <label for="Appoinment" >Select doctor</label>
          <select class="custom-select" required>
            <option selected disabled value="">Choose appoinment...</option>
            <option value="Catogory">Category 1</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>
        <div class="col-md-20 mb-3">
          <label for="Appoinment" >Appoinment</label>
          <select class="custom-select" required>
            <option selected disabled value="">Choose appoinment...</option>
            <option value="Catogory">Category 1</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>
        <div class="col-md-20 mb-3">
          <label for="exampleFormControlTextarea1">Destription :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" required></textarea>
          <div class="invalid-feedback">Please enter the description for medical report request</div>
        </div>

       


        <div class="col-md-10 mb-3">
          <input type="file" class="custom-file-input" id="validatedCustomFile" required />
          <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
        </div>
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
          <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Submit Details&nbsp;<FiSend
          color='white'
          size={25} />
        </button>
      </form>
      <div class="doc_footer">
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
          <br /><br />
          <Footer />
        </div>
    </div>

  );
}

export default Navbar;