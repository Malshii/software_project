import React from "react";
import '../../Styles/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../Footer";
// import Header from "../Header";
import Home_Section1 from "./Home.Section1";
import Home_Section2 from "./Home.Section2";
import Home_Section3 from "./Home.Section3";
import Home_Section4 from './Home.Section4';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Container} from "reactstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//import Home_Section5 from "./Home.Section5";
//import Home_Section6 from "./Home.Section6";

function Home(){
    return(
        <div>
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
                                Title
                            </Typography>
                            <Typography variant="h3" color="inherit" paragraph>
                                Description
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
                            Cloud Hotel
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Cloud Hotel offers ultimate comfort and luxury. This 4-storied
                            hotel is a beautiful combination of traditional grandeur and
                            modern facilities. The 255 exclusive guest rooms are furnished
                            with a range of modern amenities such as television and internet
                            access
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                onClick={() => {}}
                            >
                                Visit Hotel
                            </Button>
                            <Button variant="outlined" onClick={() => {}}>
                                Visit Restaurant
                            </Button>
                        </Stack>
                    </Container>
                </Box>
            </main>

            {/*<Header/>*/}

            <Home_Section1/>

            <Home_Section2/>

            <Home_Section3/>

            <hr/>

            <Home_Section4/>

            <Footer/>

        </div>
    )
}

export default Home;

