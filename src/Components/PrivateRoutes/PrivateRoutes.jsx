import React, { useContext } from 'react';
import { AuthContext } from '../AuthComponent/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext)

    if (loading) {
        return <h1 className='text-5xl'>Loading</h1>
    }
    if (user) {
        return children
    }

    return <Navigate to={"/admission"}></Navigate>

};

export default PrivateRoutes;