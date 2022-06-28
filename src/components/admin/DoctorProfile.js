import * as React from 'react';
import {Button, Container, Paper} from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";
import {useFormik} from "formik";
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {getDoctor} from "../doctor/redux/doctorActions";


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'All rights reserved.Chamal Medicare © '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const phoneRegExp = /^((0\d{9})|(\+?94\d{9}))$/

export default function DoctorProfile() {
    const validationSchema = Yup.object({
        firstName: Yup
            .string().required('First name is required'),
        lastName: Yup
            .string('Enter your last name')
            .required('Last name is required'),
        phoneNumber: Yup.string('Enter your phone number').required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
        dob: Yup.date().test("dob", "Should be greater than 18", function (value) {
            return differenceInYears(new Date(), new Date(value)) >= 18;
        }),
        degree: Yup
            .string('Enter your degree'),
        experience: Yup
            .string('Enter your email'),
        workingHospital: Yup
            .string('Enter your working hospital'),
        address: Yup
            .string('Enter your address'),
        chargePerPatient: Yup
            .number('Enter your charge per person'),
        languages: Yup
            .string('Enter your languages'),
        category: Yup
            .string('Enter your category'),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateDoctorProfile = (
        firstName,
        lastName,
        phoneNumber,
        dob,
        degree,
        experience,
        workingHospital,
        address,
        chargePerPatient,
        languages,
        category,
        navigate
    ) => {
        // dispatch(updateProfile({
        //     firstName,
        //     lastName,
        //     phoneNumber,
        //     dob,
        //     degree,
        //     experience,
        //     workingHospital,
        //     address,
        //     chargePerPatient,
        //     languages,
        //     category,
        //     navigate }
        // ));
    };
    const loading = useSelector((state) => state.doctorReducer.loading);
    const error = useSelector((state) => state.doctorReducer.error);
    const errorMessage = useSelector((state) => state.doctorReducer.errorMessage);
    const successMessage = useSelector((state) => state.doctorReducer.successMessage);
    const doctorProfile = useSelector((state) => state.doctorReducer.user);
    const loggedInUser = useSelector((state) => state.authReducer.user);

    const formik = useFormik({
        initialValues: {
            firstName: loggedInUser.firstName,
            lastName: loggedInUser.lastName,
            phoneNumber: loggedInUser.phoneNumber,
            dob: loggedInUser.dob,
            degree: doctorProfile !== null ? doctorProfile.degree : "" ,
            experience: doctorProfile !== null ? doctorProfile.experience : "",
            workingHospital: doctorProfile !== null ? doctorProfile.workingHospital : "",
            address: doctorProfile !== null ? doctorProfile.address : "",
            chargePerPatient: doctorProfile !== null ? doctorProfile.chargePerPatient : "",
            languages: doctorProfile !== null ? doctorProfile.languages : "",
            category: doctorProfile !== null ? doctorProfile.category : "",
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('hi');
            console.log(values);
            // updateDoctorProfile(values.registrationNumber,values.degree, values.experience,values.workingHospital,values.address,values.chargePerPatient,values.languages,values.category);
        },
    });
    async function fetchData() {
        dispatch(getDoctor(loggedInUser));
    }
    useEffect(
        ()=>{
            fetchData();
        }, []
    )
    if (doctorProfile === null){
        return <div/>;
    }else{
        return <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}
            >
                <Box
                    sx={{
                        my: 10,
                        mx: { md: 10, lg: 30},
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <PersonAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4" mb='40px'>
                        Update Doctor Profile
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container item xs={12}>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <Stack spacing={3} paddingTop='16px'>
                                    <DesktopDatePicker
                                        id="dob"
                                        name="dob"
                                        label="Date of Birth"
                                        inputFormat="MM/dd/yyyy"
                                        onChange={(val) => formik.setFieldValue('dob', val)}
                                        value={formik.values.dob}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    {formik.errors.dob ? (
                                        <div style={{color: '#d32f2f', fontSize: '0.75rem', margin: '3px 14px 0 14px'}}>{formik.errors.dob}</div>
                                    ) : null}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="degree"
                                    label="Degree"
                                    name="degree"
                                    autoComplete="degree"
                                    value={formik.values.degree}
                                    onChange={formik.handleChange}
                                    error={formik.touched.degree && Boolean(formik.errors.degree)}
                                    helperText={formik.touched.degree && formik.errors.degree}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="experience"
                                    label="Experience"
                                    name="experience"
                                    autoComplete="experience"
                                    value={formik.values.experience}
                                    onChange={formik.handleChange}
                                    error={formik.touched.experience && Boolean(formik.errors.experience)}
                                    helperText={formik.touched.experience && formik.errors.experience}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="workingHospital"
                                    label="Working Hospital"
                                    name="workingHospital"
                                    autoComplete="workingHospital"
                                    value={formik.values.workingHospital}
                                    onChange={formik.handleChange}
                                    error={formik.touched.workingHospital && Boolean(formik.errors.workingHospital)}
                                    helperText={formik.touched.workingHospital && formik.errors.workingHospital}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    name="address"
                                    autoComplete="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="chargePerPatient"
                                    label="Charge Per Patient"
                                    name="chargePerPatient"
                                    autoComplete="chargePerPatient"
                                    value={formik.values.chargePerPatient}
                                    onChange={formik.handleChange}
                                    error={formik.touched.chargePerPatient && Boolean(formik.errors.chargePerPatient)}
                                    helperText={formik.touched.chargePerPatient && formik.errors.chargePerPatient}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="languages"
                                    label="Languages"
                                    name="languages"
                                    autoComplete="languages"
                                    value={formik.values.languages}
                                    onChange={formik.handleChange}
                                    error={formik.touched.languages && Boolean(formik.errors.languages)}
                                    helperText={formik.touched.languages && formik.errors.languages}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    name="category"
                                    autoComplete="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                />
                            </Grid>
                            <Grid item xs={12} padding='0 10px'>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Update profile
                                </Button>
                                { error &&  <Alert severity="error">{errorMessage}</Alert>}
                                <Copyright sx={{ mt: 5 }} />
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </Container>
    }


}

