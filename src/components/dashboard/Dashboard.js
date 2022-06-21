import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

export default function Dashboard() {
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>    
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
            <CardMedia                
                component="img"
                height="100"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>                
                <Button
                    type="submit"                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Make an appointment
                </Button>
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
        
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="100"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>                
                <Button
                    type="submit"                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Request medical report
                </Button>
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>

        <Grid item xs={6}>
        <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="100"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
        <CardContent>            
            <Button
                    type="submit"                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Request lab report
                </Button>
        </CardContent>
        </CardActionArea>
    </Card>
        </Grid>

        <Grid item xs={6}>
        <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="100"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
        <CardContent>            
            <Button
                    type="submit"                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Ask a doctor
                </Button>
        </CardContent>
        </CardActionArea>
    </Card>
        </Grid>
    </Grid>
    </Grid>
  );
}
