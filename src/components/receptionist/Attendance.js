import * as React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { fontSize } from '@mui/system';

export default function Attendance() {
    function sendSMS(e){
        e.preventDefault();                
        
        document.getElementsByClassName("canceled").onclick = function(){
        //   axios.post("http://localhost:4000/sendSMS").then(()=>{        
        //     alert("Message send successfully.");
        //   }).catch((err)=>{
        //     alert(err)
        //   }) 
          alert("Message send successfully!")
        }
    }
      
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>    
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>    

        <Grid item xs={6}> 
        <Typography sx ={{fontSize: 30, textAlign:'right'}}>Doctor Attendance</Typography>       
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',  marginLeft:3}}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Doctor Name"
                    secondary={
                    <React.Fragment>                        
                        <Alert 
                            severity="success"
                            sx={{ width: '80%'}}                            
                        >Confirmed</Alert>                
                    </React.Fragment>
                    }
                />
                    <Button
                        type="submit"               
                        sx={{ mt: 3, mb: 2 }}
                        className='confirmed'
                        onClick={sendSMS}
                    >
                        Send SMS
                    </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Doctor Name"
                secondary={
                    <React.Fragment>
                    <Alert 
                            severity="error"
                            sx={{ width: '80%'}}                            
                        >Canceled</Alert>           
                    </React.Fragment>
                }
                />
                <Button
                    type="submit"               
                    sx={{ mt: 3, mb: 2 }}
                    className='canceled'
                    onClick={sendSMS}
                    >
                    Send SMS
                    </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Doctor Name"
                secondary={
                    <React.Fragment>
                    <Alert 
                            severity="warning"
                            sx={{ width: '80%'}}
                        >Pending</Alert>           
                    </React.Fragment>
                }
                />
                <Button
                    type="submit"               
                    sx={{ mt: 3, mb: 2 }}
                    className='pending'
                    onClick={sendSMS}
                    >
                    Send SMS
                    </Button>
                </ListItem>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Doctor Name"
                    secondary={
                    <React.Fragment>
                    <Alert 
                    severity="success"
                    sx={{ width: '80%'}}
                >Confirmed</Alert>          
                    </React.Fragment>
                    }
                />
                    <Button
                        type="submit"               
                        sx={{ mt: 3, mb: 2 }}
                        className='confirmed'
                        onClick={sendSMS}
                    >
                        Send SMS
                    </Button>
                </ListItem>
                <Divider variant="inset" component="li" />        
            </List>     
        </Grid>


        <Grid item xs={6}>       
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:6}}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Doctor Name"
                secondary={
                <React.Fragment>
                <Alert 
                severity="success"
                sx={{ width: '80%'}}
            >Confirmed</Alert>             
                </React.Fragment>
                }
            />
                <Button
                    type="submit"               
                    sx={{ mt: 3, mb: 2 }}
                    className='confirmed'
                    onClick={sendSMS}
                >
                    Send SMS
                </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Doctor Name"
            secondary={
                <React.Fragment>
                <Alert 
                            severity="warning"
                            sx={{ width: '80%'}}
                        >Pending</Alert>               
                </React.Fragment>
            }
            />
            <Button
                type="submit"               
                sx={{ mt: 3, mb: 2 }}
                className='pending'
                onClick={sendSMS}
                >
                Send SMS
                </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Doctor Name"
            secondary={
                <React.Fragment>
                <Alert 
                            severity="error"
                            sx={{ width: '80%'}}
                        >Canceled</Alert>         
                </React.Fragment>
            }
            />
            <Button
                type="submit"               
                sx={{ mt: 3, mb: 2 }}
                className='canceled'
                onClick={sendSMS}
                >
                Send SMS
                </Button>
            </ListItem>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Doctor Name"
                secondary={
                <React.Fragment>
                <Alert 
                severity="success"
                sx={{ width: '80%'}}
            >Confirmed</Alert>             
                </React.Fragment>
                }
            />
                <Button
                    type="submit"               
                    sx={{ mt: 3, mb: 2 }}
                    className='confirmed'
                    onClick={sendSMS}
                >
                    Send SMS
                </Button>
            </ListItem>
            <Divider variant="inset" component="li" />        
        </List>
      </Grid>
    </Grid>
    </Grid>
  );
}
