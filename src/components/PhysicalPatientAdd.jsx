import React from "react";
import '../components/PhysicalPatientAdd.css';
import HeaderDoctorProfile from "./HeaderDoctorProfile";
import AfterloginFutter from "./AfterloginFutter";


function PhysicalPatientAdd(){

    return(
      
      <>
      <div className="New-patient-add" >

      <HeaderDoctorProfile/>
      
      <div className="form">
      <div className="container">
      <form className="was-validated">
      <div>
          <h3 className="text">---Make an Appoinment---</h3>
      </div>
            
      <div class="form-row">

      <div class="col-md-6 mb-3">
      <label for="validationCustom01">Specialization</label>
      <select class="custom-select" id="validationCustom01" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">Please select one.</div>
      </div>
      </div>

      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom02" >Doctor Name</label>
      <select class="custom-select" id="validationCustom02" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">Please select one.</div>
      </div>
      </div>
    
                  
      <div class="form-row">
      <div className="col-md-6 mb-3">
      <label for="validationDate" >Date</label>
      <input type="date" class="form-control" id="validationDate" name="date" required/>
      <div class="invalid-feedback">Please available date.</div>
      </div>
       

      <div className="col-md-6 mb-3">
      <label for="validationCustom03" >Time</label>
      <input type="time" class="form-control" id="validationCustom03" name="appt" required/>
      <div class="invalid-feedback">Please available time.</div>
      </div>
        

      <div class="col-md-6 mb-3">
      <label for="validationCustom04">Charges</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="Rs.xxxx" required/>
      <div class="invalid-feedback">Please enter relevant charges</div>
      </div>
      </div>

      
      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom05">First name</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="first name" required/>
      <div class="invalid-feedback">Please enter first name</div>
      </div>

      <div class="col-md-6 mb-3">
      <label for="validationCustom06">Last name</label>
      <input type="text" class="form-control" id="validationCustom06" placeholder="last name"  required/>
      <div class="invalid-feedback">Please enter last name</div>
      </div>
      </div>


      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom07">Age</label>
      <input type="text" class="form-control" id="validationCustom07" placeholder="age" required/>
      <div class="invalid-feedback">Please enter age</div>
      </div>

      < div class="col-md-6 mb-3">
      <label for="validationCustom08">Mobile Number</label>
      <input type="text" class="form-control" id="validationCustom08" placeholder="+94xxxxxxxxx" required/>
      <div class="invalid-feedback">Please enter working number</div></div>
      </div>
      

     <fieldset class="form-group row">
     <legend class="col-form-label col-sm-2 float-sm-left pt-0">Gender</legend>
     <div class="col-sm-10">
      
     <div class="custom-control custom-radio">
     <input type="radio" class="custom-control-input" id="customControlValidation9" name="radio-stacked" required/>
     <label class="custom-control-label" for="customControlValidation9">Male</label>
     </div>
     <div class="custom-control custom-radio mb-3">
     <input type="radio" class="custom-control-input" id="customControlValidation10" name="radio-stacked" required/>
     <label class="custom-control-label" for="customControlValidation10">Female</label>
     <div class="invalid-feedback">Please enter valid one.</div>
     </div>
     </div>
     </fieldset>
          
      
      <div class="row-md-6 mb-3">
      <label for="validationCustom11">Home Address</label>
      <input type="text" class="form-control" id="validationCustom11" placeholder="Home address" required/>
      <div class="invalid-feedback">Please enter valid address</div>
      </div>
      
      
      <div className="row"></div>
      <div className="form-group row">
      <div className="col-sm-10">
      <div class="mb-3">
      <button class="signup btn btn-primary" type="submit">confirm</button>
      <div class="row align-items-start">

          
      </div>
      </div>
      </div>
      </div>
          
      
      </form>

      

      </div>

    
      </div> 

      <div class="doc_footer">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <AfterloginFutter />
      </div>
      </div> 
      
      </>
        
    );

}

export default PhysicalPatientAdd;