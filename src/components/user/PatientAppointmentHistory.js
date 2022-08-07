import axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PatientAppointmentHistory(){    

  const [appointment, setAppointment] = useState({})
  const params = useParams();
  const userId = params.userId;
  // const { id } = useParams() 

    useEffect(() => {
        if ( userId ) {
            axios.get(`http://localhost:4000/onlinePatient/onlineprofile/${userId}`)
                .then(res => {
                    console.log(res)
                    setAppointment(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ userId ]);    
    
    //localhost:4000/onlinePatient/onlineprofile/:id

    function cancelAppointment(e){
      e.preventDefault();          
      
        axios.delete(`http://localhost:4000/onlinePatient/onlineprofile/${userId}`).then(()=>{        
          window.location.reload(false);
        }).catch((err)=>{
          alert(err)
        })      
    }
    

    return(      
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
                <Typography sx ={{fontSize: 30, textAlign:'center'}} variant="h4" component="h2"> My Appointment History</Typography>  
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
              <Typography color="text.secondary" variant="body2">       
                charges : Rs.1500
              </Typography>
            </Box>
            <Divider variant="middle" />        
              <Button
                type="submit"          
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:2}}          
              >
                Reschedule
              </Button>  
              <Button          
                type="submit"          
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:3 }}                   
              >
                Cancel
              </Button>      
            </Box>    
          </Grid>    
          </Box>
          </Grid>
          </Grid>       
    );
}