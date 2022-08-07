import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CssBaseline, Grid } from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import MedicationIcon from '@mui/icons-material/Medication';
import laboratory from "../../Resources/laboratory.jpg"
import ambulance from "../../Resources/Ambulance.jpg"
import opd from "../../Resources/OPD.jpg"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Row, Col } from 'reactstrap';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MedicalServices() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh'}}>    
          <Grid item xs={12} sm={8} md={11} component={Paper} margin='15vh auto' elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
                <Box
                    sx={{
                      my: 1,
                      mx: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                >
    
    <Row>
    <Col>
    <Card sx={{ maxWidth: 300}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <BiotechIcon/>
          </Avatar>
        }        
        title="Laboratory services"        
      />
      <CardMedia
        component="img"
        height="194"
        image={laboratory}
        alt="laboratory"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        We provide an extensive range of laboratory services including genetics and specialized tests. We are well aware that your wellbeing 
        depends on the accuracy of our diagnostic reports. 
        </Typography>
      </CardContent>
    </Card>   
    </Col>

    <Col>
    <Card sx={{ maxWidth: 300}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <AirportShuttleIcon/>
          </Avatar>
        }        
        title="Ambulance services"        
      />
      <CardMedia
        component="img"
        height="194"
        image={ambulance}
        alt="ambulance"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Efficiency, speed and professionalism is key with our ambulance service, all ambulances are state of the art mobile ICUs and with its medical squad offers services such as Patient transfers and pickups, event coverage and medical evacuation by air..
        </Typography>
      </CardContent>
    </Card>
    </Col>

    <Col>
    <Card sx={{ maxWidth: 300}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <MedicationIcon/>
          </Avatar>
        }        
        title="OPD services"        
      />
      <CardMedia
        component="img"
        height="194"
        image={opd}
        alt="opd"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Provide 24 hour service for O.P.D patients       
        </Typography>
        <Typography variant="body2" color="text.secondary">       
        Admission of the patients        
        </Typography>
        <Typography variant="body2" color="text.secondary">       
        OPD Treatments
        </Typography>
        <Typography variant="body2" color="text.secondary">        
        IInjections        
        </Typography>
        <Typography variant="body2" color="text.secondary">       
        Referring to Consultants        
        </Typography>
        <Typography variant="body2" color="text.secondary">        
        Medical Advice        
        </Typography>
        <Typography variant="body2" color="text.secondary">        
        Medical Checkups       
        </Typography>
        <Typography variant="body2" color="text.secondary">        
        Accidents & Emergency treatment
        </Typography>
      </CardContent>
    </Card>
    </Col>
    </Row>
    
    </Box>
    </Grid>
    </Grid>
  );
}