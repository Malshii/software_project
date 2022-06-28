import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { requestNewSchedule } from '../doctor/redux/doctorActions';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddNewSchedule() {
  // const [description,setDescription] = useState("");      
  // const [newSchedule,setNewSchedule] = React.useState(new Date('2014-08-18T21:11:54')); 
      
  //   function handleRequest(e){
  //     e.preventDefault();
  
  //     const newRequestSchedule = { 
  //       description,              
  //       newSchedule,             
  //     }
      
  //     axios.post("http://localhost:4000/schedule/request",newRequestSchedule).then(()=>{
  //       alert("Request sent successfully")      
  //     }).catch((err)=>{
  //       alert(err)
  //     })      
  //   }  

  const validationSchema = Yup.object({
    description: Yup
      .string().required('First name is required'),
    
    newSchedule: Yup
      .date(),      
  });

    const dispatch = useDispatch();
    const navigate = useNavigate();  
        
    const requestThisSchedule = (description,newSchedule) => {
        dispatch(requestNewSchedule({ 
            description,
            newSchedule,            
            navigate }));
    };
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    const formik = useFormik({
      initialValues: {
          description: '',          
          newSchedule: new Date('2000-01-01'),          
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          console.log(values);
          requestThisSchedule(values.description,values.newSchedule);
      },
    });

    useEffect(
        ()=>{
            if(isAuthenticated){
                navigate('/addNewSchedule')
            }
        }
    )
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} margin='20vh auto' elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
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
              <CalendarMonthIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add New Schedule
            </Typography>
            <Grid container mt='20px' >
              <Grid item md={8} margin='auto'>              
              </Grid>
            </Grid>
            <Box
                component="form"
                noValidate                
                sx={{ mt: 1 }}
            >
                <Grid container xs={12}>
                    <Grid xs={12} padding='0 10px'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="text"
                            id="description"                               
                        />
                    </Grid>
                    <Grid xs={12} padding='0 10px'>
                    <Stack spacing={3}>
                    <DateTimePicker
                    label="Date & Time"                    
                    renderInput={(params) => <TextField {...params} />}
                  />
                  </Stack>
                    </Grid>
                </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Request Schedule
              </Button>                           
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}


// import React from "react";
// import SidebarHeader from "../sidebar/SidebarHeader";
// import Sidebar from "../sidebar/User.sidebar";
// import '../../Styles/userdashboard.css';

// export default function AddNewSchedule() {
//   const styles = {
//     contentDiv: {
//       display: "flex",            
//     },
//     contentMargin: {
//       marginLeft: "20px",
//       width: "100%",
//     },    
//   };
//   return (
//     <div>    
//       <SidebarHeader/>
            
//       <div style={styles.contentDiv}>
//         <Sidebar/>
//         <div style={styles.contentMargin}>

//         <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">          
//         </a>
//         </nav>                 

//           <div class="shadowNewSchedule shadow-lg p-4 mb-5 bg-white">
//               <form>               
//                 <h4>--ADD NEW SCHEDULE--</h4>
//                 <h1></h1>

//                 <div class="form-row">
//                   <div class="col-12">
//                     <label for="validationCustom03">Doctor ID</label>
//                     <input type="text" class="form-control" id="validationCustom03" placeholder="A001" required/>
//                     <div class="invalid-feedback">
//                       Please provide a valid ID.
//                     </div>
//                   </div>

//                   <div class="col-12">
//                     <label for="validationCustom03">New schedule</label>
//                     <input type="date" class="form-control" id="validationCustom03" placeholder="new schedule" required/>                    
//                   </div>                 

//                 </div>

//                 <div class="form-group">
//                   <div class="form-check">           
//                   </div>
//                 </div>

//                 <button class="signup btn btn-primary" type="submit">Add New Schedule</button>                      

//               </form>
//               </div>       
//         </div>
//       </div>

//       <div class="footer-c py-2">
//             <div class="container text-center">
//                 <p class="text-light mb-0 py-2">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
//                 <h6 class="text-light mb-0 py-2">Solution by Greeklords</h6>
//             </div>
//         </div>
        
//     </div>
//   );
// }