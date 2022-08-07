import React from "react";
import IncomeChart from "./Income.chart";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "../../Styles/chart.css";
import ProfitChart from "./Profit.chart";
import AppointmentChart from "./Appointment.chart";
import TableHeader from "./Table";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Chart() {
  
  return (     
    <Grid container component="main" sx={{ height: '100vh'}}>    
    <Grid item xs={12} sm={8} md={10} component={Paper} margin='5vh auto' variant="outlined" elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
          <Box
              sx={{
                my: 1,
                mx: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
    
    
    <Grid item xs={15}>  
      <h1 style={{ padding: "15%" }}/>
        
      
      <Container className="chartRow1">
      {/*chart row 1*/}
      <Row>

      <Col className="mb-5 mb-xl-0" xl="8">            
          <IncomeChart/>
      </Col>
      
      <Col xl="4">        
        <Row className="align-items-center">
          <ProfitChart/>
        </Row>      
      </Col>

      </Row>
      </Container>  

      <Container className="chartRow2">
      {/*chart row 2*/}         
      <Row>
      <Col className="mb-5 mb-xl-0" xl="8">            
          <TableHeader/> 
      </Col>
      
      <Col xl="4">        
        <Row className="align-items-center">
           <AppointmentChart/> 
        </Row>      
      </Col>

      </Row>
      </Container> 
      
      <div></div>      
        </Grid>
        </Box>
    </Grid>
    </Grid>
   
  );
}
