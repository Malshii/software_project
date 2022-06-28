import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';
// import HorizontalTileReservation from '../../components/HorizontalTileReservation';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

//Reservations page for the customer

const DoctorManagement = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    React.useEffect(() => {
        async function getData() {
            // await store.restaurantStore.getRestaurants();
            // if (store.userStore.userClass === 0) {
            //     await store.restaurantStore.reserveStore.getReservations();
            // } else if (store.userStore.userClass === 3) {
            //     await store.restaurantStore.reserveStore.getTodayReservations();
            // }
        }
        getData();
    }, []);

    return (
        <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}
            >
                <Box sx={{ bgcolor: 'background.paper', width: '100%', m: 'auto' }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Doctor" {...a11yProps(0)} />
                            <Tab label="Receptionist" {...a11yProps(1)} />
                            <Tab label="Lab Assistant" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Paper>
        </Container>
    );
};
export default DoctorManagement;
