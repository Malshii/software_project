import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function PrivateRoute({ ...routeProps }) {
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
