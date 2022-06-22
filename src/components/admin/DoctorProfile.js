import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorProfile, registerUser } from '../auth/redux/authActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DoctorProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    const [role,setRole] = useState("");      
    const [firstName,setFName] = useState("");
    const [lastName,setLName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");     
    const [dob, setDob] = React.useState(new Date('2014-08-18'));   
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState(""); 
    const [registrationNumber,setregistrationNumber] = useState(""); 
    const [university,setuniversity] = useState(""); 
    const [degree,setdegree] = useState(""); 
    const [experience,setexperience] = useState(""); 
    const [workingHospital,setworkingHospital] = useState(""); 
    const [address,setaddress] = useState(""); 
    const [chargePerPatient,setchargePerPatient] = useState(""); 
    const [languages,setlanguages] = useState(""); 
    const [category,setcategory] = useState(""); 

    const registerThisUser = () => {
        dispatch(addDoctorProfile({ 
            // role,
            firstName,
            lastName,
            email,
            phoneNumber,
            dob,
            password,
            confirmPassword,
            registrationNumber,
            university,
            degree,
            experience,
            workingHospital,
            address,
            chargePerPatient,
            languages,
            category,
            navigate }));
    };
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    const handleRegister = (event) => {
        event.preventDefault();
        registerThisUser();          
    };

    useEffect(
        ()=>{
            if(isAuthenticated){
                navigate('/doctorProfile')
            }
        }
    )
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>      
    
        <Grid item xs={6} marginLeft={25}>
            
        <Box
          sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Doctor Profile
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleRegister}
          sx={{ 
            mt: 1,
            my: 8,
            mx: 4,            
            flexDirection: 'column',            
            }}                              
        >
        <Grid container spacing={2}/>

        <Grid item xs={12} sm={12}>
            <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            required           
            value={role}
            label="role"
            autoComplete="role"
            autoFocus
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value={10}>doctor</MenuItem>    
          </Select>
        </FormControl>
      </Box>
      </Grid>

            <Grid container spacing={2}>      
            <Grid item xs={12} sm={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
                onChange={(e) => setFName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastname"
                  autoFocus
                  onChange={(e) => setLName(e.target.value)}
                />
            </Grid>            
            </Grid>
                          
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phonenumber"
                label="Phone Number"
                name="phonenumber"
                autoComplete="phonenumber"
                autoFocus
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              
              <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              </Stack>
                       
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"                
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Passoword"                
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(e) => setconfirmPassword(e.target.value)}
              /> 
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="registrationNumber"
                label="Registration Number"                
                id="registrationNumber"                
                onChange={(e) => setregistrationNumber(e.target.value)}
              /> 

              <TextField
                margin="normal"
                required
                fullWidth
                name="university"
                label="University"                
                id="university"                
                onChange={(e) => setuniversity(e.target.value)}
              /> 

              <TextField
                margin="normal"
                required
                fullWidth
                name="degree"
                label="Degree"                
                id="degree"                
                onChange={(e) => setdegree(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="experience"
                label="Experience"                
                id="experience"                
                onChange={(e) => setexperience(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="workingHospital"
                label="Working Hospital"                
                id="workingHospital"                
                onChange={(e) => setworkingHospital(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"                
                id="address"                
                onChange={(e) => setaddress(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="chargePerPatient"
                label="Charge per patient"                
                id="chargePerPatient"                
                onChange={(e) => setchargePerPatient(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="languages"
                label="Languages"                
                id="languages"                
                onChange={(e) => setlanguages(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="Category"                
                id="category"                
                onChange={(e) => setcategory(e.target.value)}
              />
                 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Doctor Profile
          </Button>
            { error &&  <Alert severity="error">{errorMessage}</Alert>}
          <Grid container>           
          </Grid>         
        </Box>
      </Box>


        </Grid>
    </Grid>
  
  );
}


// import React,{useState} from "react";
// import '../../Styles/index.css';
// import Header from "../Header";
// import axios from "axios";


// export default function DoctorProfile() {

//     const [type,setType] = useState("");
//     const [fullName,setFullName] = useState("");
//     const [degree,setDegree] = useState("");
//     const [experience,setExperience] = useState("");
//     const [languages,setLanguages] = useState("");
//     const [category,setCategory] = useState("");
//     const [speciality,setSpeciality] = useState("");
//     const [phoneNumber,setPhoneNumber] = useState("");
//     const [email,setEmail] = useState("");

//     function sendData(e){
//       e.preventDefault();

//       const newDoctorProfile = {
//         type,
//         fullName,
//         degree,
//         experience,
//         languages,
//         category,
//         speciality,
//         phoneNumber,
//         email,
//       }

//       axios.post("http://localhost:4000/profile/addProfile",newDoctorProfile).then(()=>{
//         alert("Doctor Profile Added")
//       }).catch((err)=>{
//         alert(err)
//       })
// }

//   return(
//     <div>

//     <Header/>

//       <div class="shadowDProfile shadow-lg p-4 mb-5 bg-white">
//       <form onSubmit={sendData}>
//         <h1></h1>
//         <h2>-------Doctor Profile-------</h2>
//         <h1></h1>
//     <div class="form-row">

//     <div class="col-12">
//         <label for="validationCustom03">Type</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Dr." required
//         onChange={(e)=>{
//           setType(e.target.value);
//         }}
//         />
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Full Name</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Full Name" required
//         onChange={(e)=>{
//           setFullName(e.target.value);
//         }}
//         />
//       </div>

//     <div class="col-12">
//         <label for="validationCustom03">Degree</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Degree" required
//         onChange={(e)=>{
//           setDegree(e.target.value);
//         }}
//         />
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Experience</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Experience" required
//         onChange={(e)=>{
//           setExperience(e.target.value);
//         }}
//         />
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Languages</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Languages" required
//         onChange={(e)=>{
//           setLanguages(e.target.value);
//         }}
//         />
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Category</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Category" required
//         onChange={(e)=>{
//           setCategory(e.target.value);
//         }}
//         />
//       </div>

//     <div class="col-12">
//         <label for="validationCustom03">Speciality</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Speciality" required
//         onChange={(e)=>{
//           setSpeciality(e.target.value);
//         }}
//         />
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Phone Number</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Phone Number" required
//         onChange={(e)=>{
//           setPhoneNumber(e.target.value);
//         }}
//         />
//         <div class="invalid-feedback">
//           Please provide a valid phone number.
//         </div>
//       </div>

//       <div class="col-12">
//         <label for="validationCustom03">Email</label>
//         <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
//         onChange={(e)=>{
//           setEmail(e.target.value);
//         }}
//         />
//         <div class="invalid-feedback">
//           Please provide a valid email.
//         </div>
//       </div>

//     </div>
//     <br/>
//     <button class="signup btn btn-primary" type="submit">Create Doctor Profile</button>

//   </form>
//   </div>

//       </div>
//   )
// }

