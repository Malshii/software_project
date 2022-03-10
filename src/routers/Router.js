/*import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';

import RegisterDoctor from "./components/RegisterDoctor";
import RegisterAdmin from "./components/RegisterAdmin";
import RegisterReceptionist from "./components/RegisterReceptionist";
import RegisterLabAssistant from "./components/RegisterLabAssistant";
import RegisterPatient from "./components/RegisterPatient";
import Login from "./components/Login";
import DoctorLogin from "./components/DoctorLogin";
import AdminLogin from "./components/AdminLogin";
import ReceptionistLogin from "./components/ReceptionistLogin";
import LabAssistantLogin from "./components/LabAssistantLogin";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import DoctorProfile from "./components/DoctorProfile";
import PageNotFound from '../components/PageNotFound';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Home} exact={true}/>
                <PrivateRoute path="/sidebar" component={Sidebar} exact={true}/>

                <PrivateRoute path="/signup" component={RegisterPatient}/>
                <PrivateRoute path="/doctor" component={RegisterDoctor}/>                
                <PrivateRoute path="/admin" component={RegisterAdmin}/>
                <PrivateRoute path="/receptionist" component={RegisterReceptionist}/>
                <PrivateRoute path="/labAssistant" component={RegisterLabAssistant}/>

                <PrivateRoute path="/login" component={Login}/>
                <PrivateRoute path="/DoctorLogin" component={DoctorLogin}/>
                <PrivateRoute path="/AdminLogin" component={AdminLogin}/>
                <PrivateRoute path="/ReceptionistLogin" component={ReceptionistLogin}/>
                <PrivateRoute path="/LabAssistantLogin" component={LabAssistantLogin}/>

                <PrivateRoute path="/doctorProfile" component={DoctorProfile}/>

                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;*/