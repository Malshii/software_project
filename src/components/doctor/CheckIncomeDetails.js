import React from "react";
import IncomeChart from "../charts/Income.chart";
import { Container, Row, Col } from "reactstrap";
import "../../Styles/chart.css";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

export default function CheckIncomeDetails() {
  
  return (     
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/> 
    <Grid item xs={15} marginLeft={20}>  
      <h1 style={{ padding: "15%" }}/> 
      
      <Container className="chartRow1">
      {/*chart row 1*/}
      <Row>

      <Col className="mb-5 mb-xl-0" xl="8">            
          <IncomeChart/>
      </Col>     

      </Row>
      </Container> 
      
      <div></div>
        </Grid>
    </Grid>
   
  );
}
