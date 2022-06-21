import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPatient from "../src/components/auth/RegisterPatient";
import Login from "../src/components/auth/Login";
import Home from "../src/components/home"
import ForgotPassword from "./components/ForogtPassword";
import PrivateRoute from "./components/PrivateRoute";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/Header";


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const App=()=> {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <BrowserRouter>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Header open={open} setOpen={setOpen} DrawerHeader={DrawerHeader} />
                    <Main open={open}>
                        <DrawerHeader />
                        <Routes>
                            <React.Fragment>
                                <Route path="/" element={<PrivateRoute/>} >
                                    <Route exact path='/' element={<Home/>}/>
                                </Route>
                            </React.Fragment>
                        </Routes>
                    </Main>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup"  element={<RegisterPatient/>}/>
                        <Route path="/forgot-password"  element={<ForgotPassword/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default App;

// {/*<React.Fragment>*/}
// {/*  <PrivateRoute exact path="/dashboard" component={UserDashboard} />*/}
// {/*  <PrivateRoute exact path="/addNewSchedule"  element={<AddNewSchedule/>}/>*/}
// {/*  <PrivateRoute exact path="/doctorProfile"  element={<DoctorProfile/>}/>*/}
// {/*  <PrivateRoute exact path="/checkAppoinment"  element={<CheckAppointment/>}/>*/}
// {/*  <PrivateRoute exact path="/updateAppointment"  element={<UpdateAppointment/>}/>*/}
// {/*  <PrivateRoute exact path="/emailSend"  element={<ContactUs/>}/>*/}
// {/*  <PrivateRoute exact path="/chart"  element={<Dashboard/>}/>*/}
// {/*  <PrivateRoute exact path="/dashboard/appointmenthistory"  element={<AppointmentHistory/>}/>*/}
// {/*  <PrivateRoute exact path="/upcomingEvents"  element={<UpcomingEvents/>}/>*/}
// {/*  <PrivateRoute exact path="/confirmNewSchedule"  element={<ConfirmNewSchedule/>}/>*/}
// {/*  <PrivateRoute exact path="/markDoctorAttendance"  element={<MarkDoctorAttendance/>}/>*/}
// {/*  /!*<Footer />*!/*/}
// {/*</React.Fragment>*/}
// <Router>
//   <Routes>
//     <Route exact path="/" element={<Home />} />
//
//     <Route exact path="/signupDoctor"  element={<RegisterDoctor/>}/>
//     <Route exact path="/signupAdmin"  element={<RegisterAdmin/>}/>
//     <Route exact path="/signupLab"  element={<RegisterLabAssistant/>}/>
//     <Route exact path="/signupRec"  element={<RegisterReciptionist/>}/>
//
//     <Route exact path="/DoctorLogin"  element={<DoctorLogin/>}/>
//     <Route exact path="/AdminLogin"  element={<AdminLogin/>}/>
//     <Route exact path="/ReceptionistLogin"  element={<ReceptionistLogin/>}/>
//     <Route exact path="/LabAssistantLogin"  element={<LabAssistantLogin/>}/>
//
//     <Route exact path="/dashboard"  element={<UserDashboard/>}/>
//     <Route exact path="/doctorDashboard"  element={<DoctorDashboard/>}/>
//     <Route exact path="/recepDashboard"  element={<ReceptionistDashboard/>}/>
//     <Route exact path="/adminDashboard"  element={<AdminDashboard/>}/>
//
//     <Route exact path="/addNewSchedule"  element={<AddNewSchedule/>}/>
//     <Route exact path="/doctorProfile"  element={<DoctorProfile/>}/>
//     <Route exact path="/checkAppoinment"  element={<CheckAppointment/>}/>
//     <Route exact path="/updateAppointment"  element={<UpdateAppointment/>}/>
//     <Route exact path="/emailSend"  element={<ContactUs/>}/>
//     <Route exact path="/chart"  element={<Dashboard/>}/>
//     <Route exact path="/dashboard/appointmenthistory"  element={<AppointmentHistory/>}/>
//     <Route exact path="/upcomingEvents"  element={<UpcomingEvents/>}/>
//     <Route exact path="/confirmNewSchedule"  element={<ConfirmNewSchedule/>}/>
//     <Route exact path="/markDoctorAttendance"  element={<MarkDoctorAttendance/>}/>
//
//     <Route exact path="/forgot-password"  element={<ForgotPassword/>}/>
//   </Routes>
// </Router>
