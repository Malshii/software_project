/*import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user') ? 
        <Component {...props} /> : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />        
    )} />
)*/

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}


/*import React from 'react';
import {connect} from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import Header from '../components/HeaderPatient';

export const PrivateRoute = ({
    isAuthenticated, 
    components: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>            
        ): (
            <Navigate to="/sidebar" />
        )
    )} />
)

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStatetoProps)(PrivateRoute);*/