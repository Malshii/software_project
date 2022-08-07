import axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AppointmentHistory(){    

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/onlinePatient/displayOnline`)
      .then((res) => {          
        console.log(res.data);
        setComments(res.data);
      })      
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return(
      <Grid container component="main" sx={{ height: '100vh'}}>    
      <Grid item xs={12} sm={8} md={10} component={Paper} margin='5vh auto' elevation={2} variant="outlined" square display='flex' flexDirection='column' justifyContent='center'>
            <Box
                sx={{
                  my: 1,
                  mx: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
            >
        
        <Grid item md={12} mt={5}> 
            <div> 
            <Typography variant="h4" component="h2" align="center">
              Appointment History
            </Typography>
            <br/> 

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: '750' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Doctor name</TableCell>
                  <TableCell>Channeled date</TableCell>
                  <TableCell>Channeling fee</TableCell>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comments.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.doctorname}
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell align="center">{row.charges}</TableCell>
                    <TableCell>{row.firstname}</TableCell>
                    <TableCell>{row.lastname}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
                
            </div>
        </Grid>
        </Box>
      
        </Grid>  
        </Grid>  
    );
}