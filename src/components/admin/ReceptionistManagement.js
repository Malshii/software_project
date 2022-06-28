import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import differenceInYears from "date-fns/differenceInYears";
import {staffRegisterUser} from "./redux/adminActions";

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

const ReceptionistManagement = () => {
    const validationSchema = Yup.object({
        firstName: Yup
            .string().required('First name is required'),
        lastName: Yup
            .string('Enter your last name')
            .required('Last name is required'),
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        phoneNumber: Yup.string('Enter your phone number').required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
        dob: Yup.date().test("dob", "Should be greater than 18", function (value) {
            return differenceInYears(new Date(), new Date(value)) >= 18;
        }),
    });

    const dispatch = useDispatch();

    const staffRegisterThisUser = (role,firstName,lastName,email,phoneNumber,dob) => {
        dispatch(staffRegisterUser({
            role,
            firstName,
            lastName,
            email,
            phoneNumber,
            dob
        }));
    };
    const loading = useSelector((state) => state.adminReducer.loading);
    const error = useSelector((state) => state.adminReducer.error);
    const errorMessage = useSelector((state) => state.adminReducer.errorMessage);
    const successMessage = useSelector((state) => state.adminReducer.successMessage);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            email: '',
            phoneNumber:'',
            dob: new Date('2000-01-01'),
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            staffRegisterThisUser("doctor",values.firstName,values.lastName, values.email,values.phoneNumber,values.dob);
        },
    });

    return (
        <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}
            >
                <Box sx={{ bgcolor: 'background.paper', width: '75%', m: 'auto' }}>
                    <Typography component="h1" variant="h5">
                        Register a Receptionist
                    </Typography>
                    <Grid container mt='20px' mb='40px' >
                        <Grid item md={8} margin='auto'>
                            <Typography align='center' variant="subtitle2" >Enter the basic information of the receptionist to register. An email will be sent to reset the password.</Typography>
                        </Grid>
                    </Grid>
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
                                    autoFocus
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
                                    autoFocus
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} padding='0 10px'>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
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
                                    autoFocus
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
                            <Grid item xs={12} padding='0 10px'>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={loading}
                                >
                                    Register User
                                </Button>
                                { error &&  <Alert severity="error">{errorMessage}</Alert>}
                                { !error && successMessage !== "" && <Alert severity="success">{successMessage}</Alert>}
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}
            >
                <Box sx={{ bgcolor: 'background.paper', width: '100%', m: 'auto' }}>

                </Box>
            </Paper>
        </Container>
    );
};
export default ReceptionistManagement;
