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

export default function CheckAppointment(){    

  const [appointment, setAppointment] = useState({})
  const { id } = useParams() 

    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:4000/onlinePatient/onlineprofile/${id}`)
                .then(res => {
                    console.log(res)
                    setAppointment(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);   
    
    
    function sendSMS(e){
      e.preventDefault();    
      
        axios.post("http://localhost:4000/sendSMS").then((res)=>{       
          console.log(res.data) 
          alert("Message send successfully.");
        }).catch((err)=>{
          alert(err)
        })
    }

    return(
        <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline/>
        <Grid container rowSpacing={3}/>    
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid container component="main" sx={{ height: '100vh'}}>
          <CssBaseline/>
          <Grid container rowSpacing={1}/>    
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}> 
          <Typography sx ={{fontSize: 30, textAlign:'right'}}>My Appointments</Typography>  
          </Grid>

          <Grid container rowSpacing={1}/>

          <Grid item xs={5}> 
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml:35, mb:10}}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Patient's name : {appointment.doctorname}
                  </Typography>
                </Grid>          
              </Grid>
              <Typography color="text.secondary" variant="body2">          
                Date : {appointment.date}         
              </Typography>
              <Typography color="text.secondary" variant="body2">       
                Time : 6.43 PM
              </Typography>
              <Typography color="text.secondary" variant="body2">       
                Charge : {appointment.charges}
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
                onClick={sendSMS}                     
              >
                Cancel
              </Button>      
            </Box>    
          </Grid>

      </Grid>
      </Grid>
    </Grid>        
    </Grid>        
    );
}

