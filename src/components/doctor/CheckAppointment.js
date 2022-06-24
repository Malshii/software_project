import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { error } from 'jquery';

export default function CheckAppointment() { 
  const [notes,getNotes] = React.useState('');
  
  const url = 'http://localhost:4000/';

  React.useEffect(()=> {
    getAllNotes();
  });

  const getAllNotes=()=>{
    axios.get('${url}past')
    .then((response)=>{
      const allNotes = response.data.notes.getNotes;
      getNotes(allNotes);
    })    
    .catch(error => console.error('Error: ${error}'));
  }
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>    
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
    <Grid item xs={6} marginLeft={25}> 
    <Typography sx={{ fontSize: 20}} marginLeft={15} color="text.primary" gutterBottom>
          Check daily appointments
    </Typography>  
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14}} marginLeft={15} color="text.secondary" gutterBottom>        
          Number of daily appointments
        </Typography>                     
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2} marginLeft={12}>          
          <Button variant="contained" endIcon={<SendIcon />}>
            Confirm
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Cancel
          </Button>
        </Stack>
      </CardActions>
    </Card>
    </Grid>

    </Grid>
    </Grid>
  );
}



// import React from "react";
// import SidebarHeader from "../sidebar/SidebarHeader";
// import Sidebar from "../sidebar/User.sidebar";
//import '../../Styles/userdashboard.css';

// export default function DoctorDashboard() {
//   const styles = {
//     contentDiv: {
//       display: "flex",            
//     },
//     contentMargin: {
//       marginLeft: "1rem",
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

//         <h4 className="appointmenttitle">CHECK DAILY APPOINTMENTS</h4>                 
          
//           <div class="cardAppoinment card">
//               <div class="card-body">
//                 <h4 class="card-title">20</h4>        

//                 <div class="row">
//                 <div class="col-md-4 form-group text-center">
//                     <a href="#" class="btn btn-primary">Confirm Appointment</a>
//                 </div>                
//                 <div class="col-md-4 form-group text-center">
//                 <a href="#" class="cancel btn btn-primary">Cancel Appointment</a>
//                 </div>
//                 </div>
                
//               </div>
//           </div>

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
