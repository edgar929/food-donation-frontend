import * as React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoutes = ({children, role }) => {

    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    if(!data || data.role !== role){
        return(
            <Navigate to="/login" replace/>
        )
    }
    return children
}

export default AdminRoutes;