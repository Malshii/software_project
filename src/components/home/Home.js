import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const cover = {
  title: 'Chamal Medicare',
  description: 'Making Health Care Better Together',
  image1: 'https://source.unsplash.com/MXbM1NrRqtI/1600x900',
  image2: 'https://source.unsplash.com/szCvt1gP2d4/1600x900',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

//Landing Page for the customer, receptionist, and waiter
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Chamal Medicare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {  
  const navigate = useNavigate();   
  return (
    <React.Fragment>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/8JKNDO0Jtcc/1600x900)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.6)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                margin: '100px ',
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                color="inherit"
                gutterBottom
              >
                {cover.title}
              </Typography>
              <Typography variant="h3" color="inherit" paragraph>
                {cover.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              What we provide as
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="primary"
              gutterBottom
            >
              Chamal Medicare
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              >
              “Chamal Medicare” is a clinical center in Sri Lanka. We provide all clinical facilities in 
              our clinic.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"     
                href="/onlinePatientAdd"                       
              >              
                Make an appointment                
              </Button>
              <Button variant="outlined" href='/medical-service'>
                Medical Services
              </Button>
            </Stack>
          </Container>
        </Box>

        <Box sx={{ bgcolor: 'background.paper', p: 6, mt:0 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Chaml Medicare
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Clinical Management System
            </Typography>
            <Copyright />
        </Box>
      </main>
    </React.Fragment>
  );
}