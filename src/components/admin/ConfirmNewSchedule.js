import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

export default function ConfirmNewSchedule() {
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>    
    <Grid item xs={12} sm={8} md={10} component={Paper} margin='15vh auto' variant="outlined" elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
          <Box
              sx={{
                my: 1,
                mx: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >

    <Grid item xs={6}> 
          <Typography sx ={{fontSize: 30, textAlign:'center'}} variant="h4" component="h2"> Requested Schedules</Typography>  
    </Grid>

    <Grid container rowSpacing={1}/>
    
    <Grid item xs={5}> 
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',mr:10 ,mt:10}}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Doctor Name
            </Typography>
          </Grid>          
        </Grid>
        <Typography color="text.secondary" variant="body2">          
          Date : 17/6/2022          
        </Typography>
        <Typography color="text.secondary" variant="body2">       
          Time : 6.43 PM
        </Typography>
      </Box>
      <Divider variant="middle" />        
        <Button
          type="submit"          
          variant="contained"
          sx={{ mt: 3, mb: 2, marginLeft:2}}          
        >
          Confirm
        </Button>  
        <Button          
          type="submit"          
          variant="contained"
          sx={{ mt: 3, mb: 2, marginLeft:3 }}                   
        >
          Reject
        </Button>      
      </Box>    
    </Grid>    
    </Box>
    </Grid>
    </Grid>    
  );
}


// import React from "react";
// import SidebarHeader from "../sidebar/SidebarHeader";
// import Sidebar_Admin from "../sidebar/Admin.sidebar";
// import '../../Styles/userdashboard.css';

// export default function ConfirmNewSchedule() {
//   const styles = {
//     contentDiv: {
//       display: "flex",            
//     },
//     contentMargin: {
//       marginLeft: "20px",
//       width: "100%",
//     },    
//   };

//   const mystyle={
//     background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
//   }

//   return (
//     <div>    
//       <SidebarHeader/>
            
//       <div style={styles.contentDiv}>
//         <Sidebar_Admin/>
//         <div style={styles.contentMargin}>

//         <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">          
//         </a>
//         </nav>           

//           <h1 style={{ padding: "20%" }}></h1>          
         
//           <div className="container">          
          
//           <div className="scheduletableH" style={mystyle}>
//               <h4>New Schedules</h4>
//           </div> 
//             <table className="scheduletable">
//               <tr>
//                 <th>Doctor Name</th>
//                 <th>Date</th>
//                 <th>Time range</th>
//                 <th>Decision</th>
//               </tr>
//               <tr>
//                 <td>Gamage</td>
//                 <td>2022/02/05</td>
//                 <td>8am - 5pm</td>
//                 <td>
//                   <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
//                   <button type="button" class="btn btn-danger">Reject request</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Silva</td>
//                 <td>2022/02/05</td>
//                 <td>8am - 5pm</td>
//                 <td>
//                   <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
//                   <button type="button" class="btn btn-danger">Reject request</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Mohomad</td>
//                 <td>2022/02/05</td>
//                 <td>8am - 5pm</td>
//                 <td>
//                   <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
//                   <button type="button" class="btn btn-danger">Reject request</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Atapattu</td>
//                 <td>2022/02/05</td>
//                 <td>8am - 5pm</td>
//                 <td>
//                   <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
//                   <button type="button" class="btn btn-danger">Reject request</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Yohan Gamage</td>
//                 <td>2022/02/05</td>
//                 <td>8am - 5pm</td>
//                 <td>
//                   <button type="button" class="btn btn-dark">Confirm new schedule</button>&nbsp;
//                   <button type="button" class="btn btn-danger">Reject request</button>
//                 </td>
//               </tr>            
//             </table>
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