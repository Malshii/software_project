import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

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