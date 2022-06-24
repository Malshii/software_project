import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';

export default function Dashboard() {
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>    
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>                
                <Typography sx={{ fontSize: 30 }} variant="body2">
                    Channel a doctor                    
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Make your appointment
                </Typography> 
                </CardContent>                
                <CardActions>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Book now
                </Button>
                </CardActions>
            </Card>
        </Grid>
        
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>                
                <Typography sx={{ fontSize: 30 }} variant="body2">
                    Medical report                    
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Request your medical report
                </Typography> 
                </CardContent>                
                <CardActions>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Request now
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={6}>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>                
                <Typography sx={{ fontSize: 30 }} variant="body2">
                Lab report                  
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Request your lab report
                </Typography> 
                </CardContent>                
                <CardActions>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Request now
                </Button>
                </CardActions>
            </Card>
        </Grid>
        
    </Grid>
    </Grid>
  );
}
